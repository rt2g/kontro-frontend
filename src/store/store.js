import Vue from "vue";
import Vuex from "vuex";
import ContentViewWidth from "./modules/width";
import Cities from "./modules/cities";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ContentViewWidth,
        Cities
    }
});
