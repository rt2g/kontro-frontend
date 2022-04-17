<template>
  <div>
    <v-app-bar app flat color="green accent-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> KontroBot</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav>
        <v-list-item
          v-for="site in sites"
          :key="site.name"
          router
          :to="site.route"
        >
          <v-list-item-icon>
            <v-icon v-text="site.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="site.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data: function() {
    return {
      drawer: false,
      sites: [
        {
          name: "Home",
          route: "/",
          icon: "mdi-view-dashboard"
        },
        {
          name: "List",
          route: "/list",
          icon: "mdi-format-list-bulleted-square"
        },
        {
          name: "Linie",
          route: "/line",
          icon: "mdi-subway-variant"
        },
        {
          name: "Statistiken",
          route: "/stats",
          icon: "mdi-chart-line"
        },
        {
          name: "FAQ & Info",
          route: "/Info",
          icon: "mdi-frequently-asked-questions"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
