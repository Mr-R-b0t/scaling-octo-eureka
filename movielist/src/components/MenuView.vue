<template>
  <b-sidebar id="left-sidebar">
    <img alt="Vue logo" src="../assets/logo.png" width="40" id="side-bar-logo" />
    <h1>The Movie List</h1>
    <hr>
    <h1 id="side-bar-menu-name">Menu</h1>
    <div class="side-bar-menu">
      <a href="#home" class="side-bar-link"><img class="side-bar-icon" src="../assets/menu-logos/home.png">Home</a>
      <a href="#discovery" class="side-bar-link"><img class="side-bar-icon"
          src="../assets/menu-logos/discovery.png">Discovery</a>
      <a href="#community" class="side-bar-link"><img class="side-bar-icon"
          src="../assets/menu-logos/friends.png">Community</a>
      <a href="#movielist" class="side-bar-link"><img class="side-bar-icon" src="../assets/menu-logos/list.png">Movie
        list</a>
      <a href="#settings" class="side-bar-link"><img class="side-bar-icon"
          src="../assets/menu-logos/settings.png">Settings</a>
    </div>
  </b-sidebar>
</template>

<style>
@import '../assets/scss/side-bar.scss'
</style>
