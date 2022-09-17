export default {
    data(){
      return {
        discount: 0,
        vat: 0,
      }
    },
    methods:{
      incrementFoodCount(index){
        this.$store.commit('incrementFoodCount', index);
      },
      decrementFoodCount(index){
        this.$store.commit('decrementFoodCount', index);
      },
      deleteItem(index){
        this.$store.commit('deleteItem', index);
      },
      passResizedValue(value){
        return parseFloat(value) == parseInt(value) ? parseInt(value) : parseFloat(value);
      }
    },
    computed: {
      foodTable(){
          return this.$store.getters.foodTable;
      },
      copyFoodTable(){
          return this.$store.getters.copyFoodTable;
      },
      calculateRawPrice(){
        return this.$store.getters.calculateRawPrice;
      },
      discountedPrice(){
        return this.passResizedValue((((100 - this.discount)*this.calculateRawPrice)/100).toFixed(2));
      },
      calculateVat(){
        return this.passResizedValue(((this.vat*this.discountedPrice)/100).toFixed(2));
      },
      totalPriceTobeShow(){
        return this.passResizedValue((parseFloat(this.discountedPrice) + parseFloat(this.calculateVat)).toFixed(2));
      }
    }
  }