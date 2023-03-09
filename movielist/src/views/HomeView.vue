<template>
    <body>
      <div id="home">
        <header>
        <div class="nom">
          <h1>Popular Movies</h1>
        </div>
        </header>
        <div style='display:flex'>
          <div><img id="img" src='../assets/examplePoster.jpeg'></div>
          <div><img id="img" src='../assets/examplePoster.jpeg'></div>
          <div><img id="img" src='../assets/examplePoster.jpeg'></div>
          <div><img id="img" src='../assets/examplePoster.jpeg'></div>
          <div><img id="img" src='../assets/examplePoster.jpeg'></div>
        </div>
      </div>
  </body>
</template>
<style>
    body {
    background-color: #161616;
    margin-left :  0px;
    float: right;
    }
    h1 {
    color: white;
    }
    #img {
    width: 100px;
    height: 150px;
    margin : 30px;
    border-radius : 10px;
    }
    .site {
      width: 200px;
    height: 100px;
    margin : 30px;
    border-radius : 10px;
    }
</style>
