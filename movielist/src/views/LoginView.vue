<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      width="40"
      id="logo"
      class="center"
    />
    <h1>The <span class="violetTitle">MovieList</span></h1>
    <form action="/action_page.php" class="form">
      <label for="fname">Email</label><br />
      <input type="text" class="input center" /><br />
      <label for="lname">Password</label><br />
      <input type="text" class="input center" /><br /><br />
      <a href="./register"
        ><input type="submit" value="Connexion" class="button center"
      /></a>
    </form>
  </div>
</template>
