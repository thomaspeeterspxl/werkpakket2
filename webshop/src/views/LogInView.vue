<template>
  <body class="body-login">
  <div class="login-container">
    <h1>Login</h1>
    <form id="login-form">
      <label class="form-label" for="email">E-mailadres:</label>
      <input  type="email" id="email" name="email" placeholder="e-mail" required>

      <label class="form-label" for="password">Wachtwoord:</label>
      <input  type="password" id="password" name="password" placeholder="wachtwoord" required>

      <button type="submit" class="button"><router-link to="/">Inloggen</router-link></button>
    </form>

    <button class="button"><a class="link" href="#" id="forgot-password">Wachtwoord vergeten?</a></button>
  </div>
  </body>
</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>

</style>
