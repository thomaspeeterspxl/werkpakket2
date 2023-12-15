<template>
  <div id="winkelmandje">
    <h2>Winkelmandje</h2>
    <table>
      <thead>
      <tr>
        <th>Product</th>
        <th>Foto</th>
        <th>Omschrijving</th>
        <th>Aantal</th>
        <th>Prijs/stuk excl btw</th>
        <th>Prijs/stuk incl btw</th>
        <th>Totaal bedrag incl btw</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cart" :key="item.name">
        <td>{{ item.name }}</td>
        <td><img :src="item.image" alt="Product"></td>
        <td>{{ item.description }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
        <!-- Add other columns for total amount, price incl. VAT, etc. -->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Winkelmand",
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
/* your styles remain unchanged */
</style>
