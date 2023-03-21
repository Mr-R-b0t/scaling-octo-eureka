<template>
  <router-view />
  <Menu />
  <Friends />

  <body>
    <div id="discovery">
      <h1>Popular Movies</h1>
      <div class="films">
        <div class="card"><img src='../assets/img/avatar.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/antmanQ.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/chatpotte.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/asterixEmpire.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/creed3.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/topgun.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/babylon.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/megan.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/scream6.jpg'>
          <h4>Nom film</h4>
        </div>
        <div class="card"><img src='../assets/img/tirailleurs.jpg'>
          <h4>Nom film</h4>
        </div>
      </div>
    </div>
    <h1>Genres</h1>
    <div class="films">
      <div class="card"><img class="flou" src='../assets/img/creed3.jpg'>
        <div class="genre">
          <h3>Action</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/megan.jpg'>
        <div class="genre">
          <h3>Horror</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/asterixEmpire.jpg'>
        <div class="genre">
          <h3>Comedy</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/tirailleurs.jpg'>
        <div class="genre">
          <h3>Thriller</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/buzz.jpg'>
        <div class="genre">
          <h3>Animation</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/topgun.jpg'>
        <div class="genre">
          <h3>Adventure</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/avatar.jpg'>
        <div class="genre">
          <h3>Fantasy</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/chatpotte.jpg'>
        <div class="genre">
          <h3>Family</h3>
        </div>
      </div>
      <div class="card"><img class="flou" src='../assets/img/antmanQ.jpg'>
        <div class="genre">
          <h3>Sci-Fi</h3>
        </div>
      </div>
    </div>
    <h1>Provider</h1>
    <div class="provider">
      <div><a href="https://www.netflix.com/ca-fr/"><img class="site" src='../assets/img/netflix.jpg'></a></div>
      <div><a href="https://www.disneyplus.com/fr-ca"><img class="site" src='../assets/img/disney.jpg'></a></div>
      <div><img class="site" src='../assets/img/amazon.jpg'></div>
      <div><img class="site" src='../assets/img/OCS.jpg'></div>
    </div>
  </body>
</template>
<style>
@import '../assets/scss/home.scss'
</style>

<script>
import Menu from '../components/MenuView.vue'
import Friends from '../components/FriendsView.vue'
export default {
  components: {
    Menu,
    Friends
  }
}
</script>
