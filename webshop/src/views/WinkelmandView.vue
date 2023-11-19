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
      <tr>
        <td>Productnaam 1</td>
        <td><img src="" alt="Product 1"></td>
        <td>Omschrijving van product 1.</td>
        <td>2</td>
        <td>34.00</td>
        <td>40.00</td>
        <td>80.00</td>
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
  name: "WinkelmandView"
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