<template>
  <div class="tablecomponent">

    <chart-table>
      <h1 slot="heading">Food Table:</h1>
      <table slot="chartTable" class="food-table">
        <tr>
          <th>SI</th>
          <th>Food</th>
          <th>Price</th>
        </tr>
        <tr v-for="(food, index) in foodTable" :key="food.id">
          <td>{{index+1}}</td>
          <td>{{food.Food}}</td>
          <td>{{food.price}}</td>
        </tr>
      </table>
    </chart-table>

    <h1>Order Table:</h1>
    <table class="food-table">
      <tr>
        <th>Food Name</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
      </tr>
      <tr v-for="(food, index) in copyFoodTable" :key="food.id">
        <td>{{food.Food}}</td>

        <td style="display: flex;flex-direction: row; ">
          <button style="width: 50px;" v-on:click="decrementFoodCount(index)" type="button">-</button>
          <h2 style="margin: 0 20px;">{{food.Quantity}}</h2>
          <button style="width: 50px;" v-on:click="incrementFoodCount(index)" type="button">+</button>
        </td>

        <td>{{food.Quantity*food.price}}</td>
        <td><button v-on:click="deleteItem(index)" type="button">Delete</button></td>
      </tr>

      <tr>
        <td>Discount</td>
        <td><input type="text" v-model="discount"></td>
        <td>{{ discountedPrice == 0 || discountedPrice == NaN ? '' : discountedPrice }}</td>
        <td></td>
      </tr>

      <tr>
        <td>Vat</td>
        <td><input type="text" v-model="vat"></td>
        <td>{{calculateVat == 0 || calculateVat == NaN ? '' : calculateVat}}</td>
        <td></td>
      </tr>

      <tr>
        <td>Total</td>
        <td></td>
        <td>{{totalPriceTobeShow == 0 || totalPriceTobeShow == NaN ? '' : totalPriceTobeShow}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import ChartTable from './ChartTable.vue'
  import mixinsForTableComponent from '@/mixins/mixinsForTableComponent'
export default {
  name: "TableComponent",
  mixins: [mixinsForTableComponent],
  components:{
    'chart-table' : ChartTable
  },
};
</script>

<style scoped>
.food-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.food-table td,
.food-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.food-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.food-table tr:hover {
  background-color: #ddd;
}

.food-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
