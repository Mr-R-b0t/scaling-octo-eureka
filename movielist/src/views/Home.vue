<template>
    <body>
        <header>
            <div class="nom">
            <h1>Popular Movies</h1>
            </div>
        </header>
        <div  class="scrolling-wrapper" style='display:flex'>
            <div class="card"><img src='../assets/img/avatar.jpg'></div>
            
            <div class="card"><img src='../assets/img/antmanQ.jpg'></div>

            <div class="card"><img src='../assets/img/chatpotte.jpg'></div>
            
            <div class="card"><img src='../assets/img/asterixEmpire.jpg'></div>
            
            <div class="card"><img src='../assets/img/creed3.jpg'></div>

            <div class="card"><img src='../assets/img/topgun.jpg'></div>
            
            <div class="card"><img src='../assets/img/babylon.jpg'></div>

            <div class="card"><img src='../assets/img/megan.jpg'></div>
            
            <div class="card"><img src='../assets/img/scream6.jpg'></div>
            
            <div class="card"><img src='../assets/img/tirailleurs.jpg'></div>
        
        </div>
        <div  class="scrolling-wrapper" style='display:flex'>
            <div class="card"><img class="flou" src='..\img\creed3.jpg'><div class="genre"><h1>Action</h1></div></div>
            <div class="card"><img class="flou" src='..\img\megan.jpg'><div class="genre"><h1>Horreur</h1></div></div>
            <div class="card"><img  class="flou" src='..\img\asterixEmpire.jpg'><div class="genre"><h1>Comedy</h1></div></div>
            <div class="card"><img src='..\img\ouioui.jpg'></div>
            <div class="card"><img src='..\img\ouioui.jpg'></div>
            <div class="card"><img src='..\img\ouioui.jpg'></div>
        </div>

        <div style='display:flex'>
            <div><img class="site" src='../assets/img/netflix.jpg'></div>
            <div><img class="site" src='../assets/img/disney.jpg'></div>
            <div><img class="site" src='../assets/img/amazon.jpg'></div>
        </div>
        <a href="https://www.themoviedb.org/movie" class="btn btn-primary">Go to the movies</a>
    </body>
</template>
<style>
    .card .genre {
    z-index: 1;
    position: absolute;
    text-align: center;
    font-family: Georgia;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 30%;
    color: white;
    width: 70%;
    }
    .scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    }
    .card {
    display: inline-block;
    position: relative;
    }
    ::-webkit-scrollbar { 
    display: none; 
    } 

    .flou {
    filter: blur(2px);
    }
    h1 {
    color: white;
    }
    body {
    background-color: black;
    margin-left : 400px ;
    margin-right : 400px ;
    }
    img {
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
