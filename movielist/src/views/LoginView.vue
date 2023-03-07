<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
    width="40"
    id="logo"
    class="center"
  />
  <h1>The <span class="violet-title">MovieList</span></h1>
  <form action="/action_page.php" class="form">
    <label for="fname">Email</label><br />
    <input type="text" class="input center" /><br />
    <label for="lname">Password</label><br />
    <input type="text" class="input center" /><br /><br />
    <a href="#register" id="create-account">Create an account</a>
    <button class="button center">Connexion</button>
  </form>
</template>
