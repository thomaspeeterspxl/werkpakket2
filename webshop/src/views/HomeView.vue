<template>
  <body class="body">
<!--  <nav class="navbar">-->
<!--    <img src="../assets/images/Layer%206.png" alt="nav image">-->
<!--    <ul>-->
<!--      <li><a href="startpagina.html"><i class="fa-solid fa-house"></i></a></li>-->
<!--      <li><router-link to="/Products">Producten</router-link></li>-->
<!--      <li><a href="#contact">Contact</a></li>-->
<!--      <li><router-link to="/LogIn"><i class="fa-solid fa-user"></i></router-link></li>-->
<!--      <li><a href="index.html"><i class="fa-solid fa-cart-shopping"></i></a></li>-->
<!--    </ul>-->
<!--  </nav>-->

<!--  <section class="about">-->
<!--    <div class="about-tekst">-->
<!--      <h1 class="main-heading">RetroSpin Records</h1>-->
<!--      <h3 class="sub-heading">Only for the best old school music experience</h3>-->
<!--      <div class="stars">-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->

<!--      </div>-->
<!--      <p class="description">Welkom bij 'RetroSpin Records' - Jouw ultieme webshop voor alle-->
<!--        vinyl spullen!</p>-->

<!--      <p class="description">Bij ons draait alles om de tijdloze magie van vinyl. Ontdek een wereld vol warme,-->
<!--        nostalgische klanken-->
<!--        terwijl je door onze uitgebreide collectie LP's bladert. Van legendarische klassiekers tot zeldzame-->
<!--        vondsten, we hebben ze allemaal.</p>-->

<!--      <p class="description">Maar dat is nog niet alles! We zijn niet alleen een bron voor prachtige vinylplaten, we-->
<!--        bieden ook een-->
<!--        selectie hoogwaardige platenspelers, naalden en accessoires die elke muziekliefhebber zal bekoren.</p>-->

<!--      <p class="description">Bij 'RetroSpin Records' geloven we in het koesteren van de authentieke-->
<!--        geluidservaring en de-->
<!--        tijdloze esthetiek van vinyl. Onze passie is om jou te voorzien van de beste muziekbeleving, of je nu een-->
<!--        doorgewinterde verzamelaar bent of net begint aan je vinylavontuur.</p>-->

<!--      <p class="description">Dus, laat de platen draaien, geniet van de knisperende geluiden en duik in de rijke-->
<!--        geschiedenis van muziek-->
<!--        - allemaal met een vleugje retro charme. Begin je vinylreis vandaag nog bij 'RetroSpin Records'!</p>-->

<!--      <div class="stars">-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->
<!--        <i class="fa-solid fa-record-vinyl"></i>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<AboutComponent/>
<!--<ProductCardComponentV1></ProductCardComponentV1>-->
<PopularProductsComponent/>
<ContactComponent/>
<!--  <section id="contact">-->
<!--    <div class="container">-->
<!--      <section class="company-info">-->
<!--        <h2>Ons Bedrijf</h2>-->
<!--        <p>Bedrijfsnaam: Voorbeeldbedrijf</p>-->
<!--        <p>Adres: Voorbeeldstraat 123, 1234 AB Voorbeeldstad</p>-->
<!--        <p>Telefoon: +31 123 456 789</p>-->
<!--        <p>E-mail: info@voorbeeldbedrijf.com</p>-->
<!--      </section>-->
<!--      <form class="from" action="mailto:jouwemail@example.com" method="post" enctype="text/plain">-->
<!--        <h2>Contacteer ons</h2>-->
<!--        <label class="form-label" for="naam">Naam:</label>-->
<!--        <input type="text" name="naam" id="naam" required>-->

<!--        <label class="form-label" for="email">E-mailadres:</label>-->
<!--        <input type="email" name="email" id="email" required>-->

<!--        <label class="form-label" for="bericht">Bericht:</label>-->
<!--        <textarea name="bericht" id="bericht" rows="5" required></textarea>-->

<!--        <input type="submit" value="Versturen">-->
<!--      </form>-->
<!--    </div>-->
<!--  </section>-->
  </body>
</template>

<script>

import AboutComponent from '@/components/AboutComponent.vue'
// import ProductCardComponentV1 from "@/components/ProductCardComponentV1.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";
export default {
  data() {
    return {}
  },
  components: {
    ContactComponent,
    // ProductCardComponentV1,
    PopularProductsComponent,
    // NavComponent,
    // HeaderComponent,
    AboutComponent,
    // CardComponent
  }
}
</script>

<style scoped>

</style>