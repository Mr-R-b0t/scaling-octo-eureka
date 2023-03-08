<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to The <span class="violetTitle"> MovieList</span></h1>
    <h2>Create an account</h2>
    <form action="/page-traitement-donnees" method="post">
      <div>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" required>
      </div>
      <div>
        <label for="password">Repeat password</label><br>
        <input type="password" id="password" name="password" required>
      </div>
      <button class="button" type="submit">Connexion</button>
    </form>
  </div>
</template>
