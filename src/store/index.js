import Vue from 'vue'
import Vuex from 'vuex'
import foodItemsJson from "@/assets/jsonFiles/foodItems.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodItems: JSON.parse(JSON.stringify(foodItemsJson)),
    copyFoodItems: [],
  },
  getters: {
    foodTable: state => {
      state.copyFoodItems = state.foodItems.map(eachFood => ({...eachFood, ...{Quantity: 0}}));
      return state.foodItems;
    },
    copyFoodTable: state => state.copyFoodItems,
    calculateRawPrice: state => {
      let TotalRawPrice = 0;
      state.copyFoodItems.forEach(eachFood => {
        TotalRawPrice += eachFood.price*eachFood.Quantity; 
      })
      return TotalRawPrice;
    },
  },
  mutations: {
    incrementFoodCount: (state, index) => state.copyFoodItems[index].Quantity += 1,
    decrementFoodCount: (state, index) => state.copyFoodItems[index].Quantity -= state.copyFoodItems[index].Quantity ? 1 : 0,
    deleteItem: (state, index) => state.copyFoodItems.splice(index, 1),
    


  },
  actions: {
  },
  modules: {
  }
})
