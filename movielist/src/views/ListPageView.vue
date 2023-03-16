<template>
    <body id="body">
        <div id="page">
            <div id="film">
                <h2 id="h2">List name</h2>
                <h4 id="h4">Okba Loan</h4>
                <p id="description"> This is the description of a list.</p>
                <p id="bottomTitle">45 films - Total runtime : 30 h 40mn</p>
            </div>
            <div id="lists">
            </div>
        </div>
    </body>
</template>
<style>
    @font-face {
    font-family: Raleway;
    src: url(../assets/Raleway/Raleway-VariableFont_wght.ttf);
    }

    #body {
    background-color: #161616;
    color: white;
    font-family: Raleway;
    padding-left: 30px;
    }

    #page {
        margin-left: 100px;
        display: flex;
    }

    #rating {
        color: yellow;
    }

    #description {
        padding-top: 10px;
    }

    #h4 {
        font-size:smaller;
    }

    #film {
        margin-left: 200px;
        background-color: black;
        padding: 30px;
        border-radius: 20px;
        min-width: 800px;
    }

    #bottomTitle {
        padding-bottom: 15px;
    }
</style>
