<template>
    <body>
        <img
        alt="Vue logo"
        src="../assets/logo.png"
        width="40"
        id="logo"
        class="center"
        />
        <div id="page">
            <img id="poster" alt="poster" src="../assets/examplePoster.jpeg"/>
            <div id="film">
                <h2>Film name</h2>
                <p id="bottomTitle">1h30mn - 2023 - France</p>
                <p id="rating">4.5/10</p>
                <p id="description"> This is the description of a film.</p>
                <ul>
                    <li>Director : James Cameron</li>
                    <li>Genre : Comedy</li>
                    <li>Budget : 400 000$</li>
                    <li>Langage : English</li>
                    <li>Provider : Netflix</li>
                </ul>
            </div>
        </div>
    </body>
</template>
<style>
    @font-face {
    font-family: Raleway;
    src: url(../assets/Raleway/Raleway-VariableFont_wght.ttf);
    }

    body {
    background-color: #161616;
    color: white;
    font-family: Raleway;
    padding-left: 30px;
    }

    form {
        padding-bottom: 15px;
    }

    .violetTitle {
        color: #7C15FF;
    }

    h1 {
        position : relative;
        left: 500px;
        font-size: 50px;
        font-family: 'Raleway';
        font-style: normal;
        display: flex;
        align-items: center;
        text-align: center;
    }

    #poster {
        position: absolute;
        width: 150px;
    }

    #page {
        margin-left: 100px;
        display: flex;
    }

    #rating {
        color: yellow;
    }

    #description {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    #film {
        margin-left: 200px;
        background-color: black;
        padding: 30px;
        border-radius: 20px;
        min-width: 800px;
    }
</style>
