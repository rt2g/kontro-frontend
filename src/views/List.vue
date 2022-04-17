<template>
  <div class="list">
    <control-list></control-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ControlList from "../components/ControlList";

export default {
  name: "List",
  components: {
    ControlList
  }
};
</script>
