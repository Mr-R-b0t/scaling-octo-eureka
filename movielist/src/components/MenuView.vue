<template>
    <body>
        <header>
            <img
            alt="Vue logo"
            src="../assets/logo.png"
            width="40"
            id="logo"
            class="center"
            />
            <h1>The Movie List</h1>
            <hr>
        </header>
        <h1 id="menuName">Menu</h1>
        <div id="menu">
            <a href="#menu"><img id="logos" src="../assets/menu-logos/home.png" width="17px">Home</a>
            <a><img id="logos" src="../assets/menu-logos/discovery.png" width="17px">Discovery</a>
            <a><img id="logos" src="../assets/menu-logos/friends.png" width="17px">Community</a>
            <a><img id="logos" src="../assets/menu-logos/list.png" width="17px">Movie list</a>
            <a><img id="logos" src="../assets/menu-logos/settings.png" width="17px">Settings</a>
        </div>
    </body>
</template>
<style>
    body {
        background-color: #161616;
        color: white;
        margin-left: 13px;
        margin-top: 10px;
    }
    a {
        padding-left: 7px;
        display: block;
        color: white;
        opacity: 70%;
        text-decoration: none;
    }
    a:hover {
        opacity: 100%;
        color: white;
    }
    #logos {
        padding-right: 8px;
        margin-top: 13px;
        overflow: auto;
    }
    #menu {
        font-size:medium;
    }
    header {
        display:inline-table;
    }
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #logo {
        margin-top: 10px;
        justify-content: center;
    }

    hr {
        width: 200px;
        margin-left: 0;
        opacity: 30%;
    }
    #menuName {
        text-align: left;
    }

</style>
