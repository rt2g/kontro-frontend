<template>
  <div>
    <h2>{{ contentWidth }}</h2>
    <h2>{{ allCities }}</h2>
    <h2>{{ vehiclesIn("Berlin") }}</h2>
    <h2>{{ linesIn("Berlin", "U-Bahn") }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Example",
  computed: mapGetters(["contentWidth", "allCities", "vehiclesIn", "linesIn"])
};
</script>


<style scoped></style>
