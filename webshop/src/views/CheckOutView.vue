<template>
  <body>
  <section>
    <form>
      <h2>Verzendingsgegevens</h2>

      <div class="form-group">
        <label for="firstName">Voornaam *</label>
        <input type="text" id="firstName" name="firstName" required>
      </div>

      <div class="form-group">
        <label for="lastName">Achternaam *</label>
        <input type="text" id="lastName" name="lastName" required>
      </div>

      <div class="form-group">
        <label for="email">E-mail adres *</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="street">Straatnaam + huisnummer *</label>
        <input type="text" id="street" name="street" required>
      </div>

      <div class="form-group">
        <label for="address2">Adres regel 2</label>
        <input type="text" id="address2" name="address2">
      </div>

      <div class="form-group">
        <label for="zip">Postcode *</label>
        <input type="text" id="zip" name="zip" required>
      </div>

      <div class="form-group">
        <label for="city">Plaatsnaam *</label>
        <input type="text" id="city" name="city" required>
      </div>

      <div class="form-group">
        <label for="country">Land *</label>
        <input type="text" id="country" name="country" required>
      </div>

      <div class="form-group">
        <label for="phone">Telefoonnummer *</label>
        <input type="tel" id="phone" name="phone" required>
      </div>

      <div class="form-group2">
        <label>
          <input type="checkbox" v-model="differentBillingAddress"> Facturatiegegevens verschillend van adresgegevens
        </label>
      </div>


      <button class="button-detail" @click="viewBevestiging">verder</button>
    </form>.
  </section>
  <section>
    <form>
      <div class="form_deel2" v-if="differentBillingAddress">
        <h2>Facturatiegegevens</h2>

        <div class="form-group">
          <label for="billingName">Naam:</label>
          <input type="text" id="billingName" name="billingName" v-model="billingName" required>
        </div>

        <div class="form-group">
          <label for="billingStreet">Straatnaam + huisnummer:</label>
          <input type="text" id="billingStreet" name="billingStreet" v-model="billingStreet" required>
        </div>
      </div>
    </form>
  </section>
  <section>
    <winkelmandcomponent></winkelmandcomponent>
  </section>
  </body>


</template>

<script>
import { useShoppingCartStore } from '@/stores/shoppingCartStore.js'
import { useProductStore } from '@/stores/productStore.js'
import winkelmandcomponent from "@/components/winkelmandcomponent.vue";

export default {
  data() {
    return {
      bevestigingsbericht: 'Bedankt voor je bestelling',
      uitleg: 'De betaling is geslaagd. Je ordernummer is: 2359845',
      products: useProductStore(),
      shoppingCartProducts: useShoppingCartStore(),
      differentBillingAddress: false,
      billingName: '',
      billingStreet: '',
    };
  },
  methods: {
    viewBevestiging() {
      this.$router.push({ name: 'bevestiging' })
    },
  },
  components: {
    winkelmandcomponent
  }
}
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-around;
}

form {
  max-width: 420px;
  margin: 20px auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  margin-top: 6px;
}
.form-group2 {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  margin-top: 6px;
}
input, select {
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
  /*width: 100%;*/
}

button {
  background-color: #84B5A5;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #177961;
}

table {
  width: 500px;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #BEA888;
  color: #fff;
  font-family: "Open Sans";
}

img {
  max-width: 200px;
  max-height: 200px;
}
.form_deel2{
  margin-top: 20px;
}
</style>