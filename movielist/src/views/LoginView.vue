<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png" width="40" id="logo" class="center" />
  <h1 class="text-center">The <span class="violet-text">MovieList</span></h1>
  <form action="/action_page.php" class="form">
    <label for="">Email</label><br />
    <input type="text" class="input center" /><br />
    <label for="">Password</label><br />
    <input type="text" class="input center" /><br />
    <a href="#register" id="link-login-register">Create an account</a>
    <a href="#home"><input type="button" value="Connexion" class="button center"></a>
  </form>
</div>
</template>

<style>
@import '../assets/scss/login-register.scss';
</style>
