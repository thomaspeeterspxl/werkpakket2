<template>
  <section id="contact">
    <div class="container">
      <section class="company-info">
        <h2>Ons Bedrijf</h2>
        <p>Bedrijfsnaam: Voorbeeldbedrijf</p>
        <p>Adres: Voorbeeldstraat 123, 1234 AB Voorbeeldstad</p>
        <p>Telefoon: +31 123 456 789</p>
        <p>E-mail: info@voorbeeldbedrijf.com</p>
      </section>
      <form class="from" action="mailto:jouwemail@example.com" method="post" enctype="text/plain">
        <h2>Contacteer ons</h2>
        <label class="form-label" for="naam">Naam:</label>
        <input type="text" name="naam" id="naam" required>

        <label class="form-label" for="email">E-mailadres:</label>
        <input type="email" name="email" id="email" required>

        <label class="form-label" for="bericht">Bericht:</label>
        <textarea name="bericht" id="bericht" rows="5" required></textarea>

        <input type="submit" value="Versturen">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactComponent"
}
</script>

<style scoped>

</style>