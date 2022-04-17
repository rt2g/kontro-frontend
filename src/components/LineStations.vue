<template>
  <v-timeline dense>
    <v-timeline-item
      class="station"
      v-for="station in line.stations"
      :key="station.name"
      :color="station.controls == null ? 'blue' : 'warning'"
      small
    >
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ station.name }}</v-card-title>
        <div v-if="station.controls != null">
          <v-card-text style="padding-top: 0px">
            <div v-for="control in station.controls" :key="control.id">
              {{ control.time }} {{ control.description }}
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "LineStations",
  data: function() {
    return {
      line: {
        name: "U8",
        stations: [
          {
            name: "Alexanderplatz",
            controls: [
              {
                id: 0,
                time: "00:00",
                description: "2 Laxnacken"
              },
              {
                id: 1,
                time: "00:00",
                description: "2 Laxnacken"
              },
              {
                id: 2,
                time: "00:00",
                description: "2 Laxnacken"
              }
            ]
          },
          {
            name: "Schillingstraße"
          },
          {
            name: "Strausberger Platz"
          },
          {
            name: "Weberwiese",
            controls: [
              {
                id: 0,
                time: "00:00",
                description: "2 Laxnacken"
              },
              {
                id: 1,
                time: "00:00",
                description: "2 Laxnacken"
              },
              {
                id: 2,
                time: "00:00",
                description: "2 Laxnacken"
              }
            ]
          },
          {
            name: "Frankfurtertor"
          },
          {
            name: "Samariterstraße"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.station {
  padding-top: 16px;
}
</style>
