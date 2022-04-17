import kontro from "../../kontro";

const state = kontro;
const getters = {
    allCities: state => {
        let cityArray = [];
        for (let city of state.cities) {
            cityArray.push(city.name);
        }
        return cityArray;
    },
    vehiclesIn: state => city => {
        let vehicleArray = [];
        for (let for_city of state.cities) {
            if (city === for_city.name) {
                for (let vehicle of for_city.vehicles) {
                    vehicleArray.push(vehicle.name);
                }
                return vehicleArray;
            }
        }
        return vehicleArray;
    },
    linesIn: state => (city, vehicle) => {
        let lineArray = [];
        for (let for_city of state.cities) {
            if (city === for_city.name) {
                for (let for_vehicle of for_city.vehicles) {
                    if (vehicle === for_vehicle.name) {
                        for (let line of for_vehicle.lines) {
                            lineArray.push(line.name);
                        }
                        return lineArray;
                    }
                }
            }
        }
        return lineArray;
    }
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
