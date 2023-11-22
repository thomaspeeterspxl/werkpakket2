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
      <!-- Voorbeeldrijen, vervang deze met echte productgegevens -->
      <tr v-for="item in product" :key="item.name">
        <td>{{ item.name }}</td>
        <!-- Voeg andere kolommen toe afhankelijk van je behoeften -->
        <td><img src="" alt="Product"></td>
        <td>Omschrijving van {{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.price }}</td>
        <!-- Voeg andere kolommen toe voor totaalbedrag, prijs incl btw, etc. -->
      </tr>
      <tr>
        <td>Productnaam 2</td>
        <td><img src="" alt="Product 2"></td>
        <td>Omschrijving van product 2.</td>
        <td>1</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Winkelmand",
  data() {
    return {
      product: {}
    };
  },
  created() {
    console.log("WinkelmandView created. Route params:", this.$route.params);
    const productInfo = this.$route.params.product;
    console.log("Product info from route params:", productInfo);

    // Voeg het product toe aan de winkelmand
    this.addToCart(productInfo);
  },
  methods: {
    addToCart(product) {
      // Voeg het product toe aan de winkelmand
      this.product.push({
        name: product.title,
        quantity: product.quantity,
        price: product.price
        // Je kunt hier andere informatie toevoegen afhankelijk van je behoeften
      });
    }
  }
}
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

#winkelmandje {
  width: 70%;
  margin: 125px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color:#BEA888;
  color: #fff;
  font-family: "Open Sans";
}

img {
  max-width: 50px;
  max-height: 50px;
}
</style>