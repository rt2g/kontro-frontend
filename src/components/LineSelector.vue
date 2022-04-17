<template>
  <div>
    <v-row v-resize="onResize"></v-row>
    <div :class="gridStyle">
      <v-autocomplete
        v-model="city"
        :disabled="cities === null || cities === []"
        :items="cities"
        item-text="_id"
        item-value="_id"
        @change="getVehicles(city)"
        @select="$emit('city-selected',city)"
        :class="this.isOneLine ? 'cityStyle' : ''"
      >
      </v-autocomplete>
      <v-autocomplete
        v-model="vehicle"
        :disabled="vehicles === null || vehicles === []"
        :items="vehicles"
        item-text="_id"
        item-value="_id"
        @change="getLines(city, vehicle)"
        :class="this.isOneLine ? 'vehicleStyle' : ''"
      >
      </v-autocomplete>
      <v-autocomplete
        v-model="line"
        :disabled="lines === null || lines === []"
        :items="lines"
        item-text="_id"
        item-value="_id"
        :class="this.isOneLine ? 'lineStyle' : ''"
      >
      </v-autocomplete>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LineSelector2",
  data: function() {
    return {
      windowWidht: null,
      cities: null,
      city: null,
      vehicles: null,
      vehicle: null,
      lines: null,
      line: null
    };
  },
  created() {
    this.getCities();
  },
  methods: {
    onResize() {
      this.windowWidht = window.innerWidth;
      this.height = window.innerHeight;
    },
    getCities: function() {
      axios
        .get("http://localhost:1314/api/cities")
        .then(response => (this.cities = response.data));
    },
    getVehicles: function(cityId) {
      this.vehicles = null;
      this.lines = null;
      if (cityId !== undefined) {
        axios
          .get("http://localhost:1314/api/" + cityId + "/vehicles")
          .then(response => (this.vehicles = response.data));
      }
    },
    getLines: function(cityId, vehicleId) {
      this.lines = null;
      if (vehicleId !== undefined && cityId !== undefined) {
        axios
          .get(
            "http://localhost:1314/api/" + cityId + "/" + vehicleId + "/lines"
          )
          .then(response => (this.lines = response.data));
      }
    }
  },
  computed: {
    gridStyle: function() {
      if (this.isOneLine) {
        return "grid_one_line";
      }
      return "grid_multi_line";
    },
    isOneLine: function() {
      if (this.windowWidht != null) {
        if (this.windowWidht >= 300) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped>
.grid_one_line {
  display: grid;
  grid-template-columns:
    minmax(5px, 2em)
    minmax(100px, 200px)
    minmax(5px, 2em)
    minmax(100px, 200px)
    minmax(5px, 2em)
    minmax(60px, 150px)
    minmax(5px, 2em)
    minmax(0px, auto);
}
.grid_multi_line > div {
  margin-top: 0px;
  padding-top: 0px;
}
.grid_multi_line {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 33px;
  padding-right: 1em;
  padding-left: 1em;
}
.cityStyle {
  grid-column: 2;
}
.vehicleStyle {
  grid-column: 4;
}
.lineStyle {
  grid-column: 6;
}
</style>
