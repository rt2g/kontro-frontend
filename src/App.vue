<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view id="router_view"> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
  data() {
    return {
      width: 0
    };
  }
};
</script>
