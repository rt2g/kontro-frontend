<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="controls"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      headers: [
        {
          text: "Haltestelle",
          value: "station",
          active: true
        },
        {
          text: "Stadt",
          value: "city",
          active: true
        },
        {
          text: "Linie",
          value: "line",
          active: true
        },
        {
          text: "Uhrzeit",
          value: "time",
          active: true
        },
        {
          text: "Beschreibung",
          value: "desc",
          active: true,
          sortable: false
        }
      ],

      controls: [
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S42",
          time: "13:12",
          desc: "Eine wertfreie Beschreibung."
        },
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S41",
          time: "13:14",
          desc: "Eine wertfreie Beschreibung."
        },
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S42",
          time: "16:10",
          desc: "Eine wertfreie Beschreibung."
        },
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S42",
          time: "17:30",
          desc: "Eine wertfreie Beschreibung."
        },
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S8",
          time: "16:45",
          desc: "Eine wertfreie Beschreibung."
        },
        {
          station: "Frankfurter Allee",
          city: "Berlin",
          line: "S41",
          time: "16:45",
          desc: "Eine wertfreie Beschreibung."
        }
      ]
    };
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    created() {
      this.items = [];
      for (const header in this.headers) {
        this.items.push(header.text);
      }
    }
  },
  computed: {
    getItems: function() {
      var items = [];
      for (const header in this.headers) {
        items.push(header.push);
      }
      return items;
    },
    getHeaders: function() {
      let headers = [];
      for (const header in this.headers) {
        if (header.active) {
          header.active = undefined;
          headers.push(header);
        }
      }
      return headers;
    }
  }
};
</script>
