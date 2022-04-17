<template>
  <div>
    <LineSelector v-on:city-selected="city = $event">

    </LineSelector>
    {{city}}
  </div>
</template>

<script>
import LineSelector from "../components/LineSelector";

export default {
  name: "LineVue",
  components: {
    LineSelector,
  },
  data: function () {
    return {
      city: null
    }
  }
};
</script>

<style scoped></style>
