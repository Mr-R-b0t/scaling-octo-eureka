<template>
    <b-sidebar style="width: 350px; float: left;">
      <header>
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="40"
          id="logo"
        />
        <h1>The Movie List</h1>
        <hr>
      </header>
      <h1 id="menuName">Menu</h1>
      <div id="menu">
        <a href="#home"><img id="logos" src="../assets/menu-logos/home.png">Home</a>
        <a href="#discovery"><img id="logos" src="../assets/menu-logos/discovery.png">Discovery</a>
        <a href="#community"><img id="logos" src="../assets/menu-logos/friends.png">Community</a>
        <a href="#movielist"><img id="logos" src="../assets/menu-logos/list.png">Movie list</a>
        <a href="#settings"><img id="logos" src="../assets/menu-logos/settings.png">Settings</a>
      </div>
    </b-sidebar>
  </template>

<style>
    body {
      background-color: #161616;
      color: white;
      margin-top: 10px;
      float: left;
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
      justify-content: center;
      width: 17px;
    }

    #menu {
      font-size: medium;
    }

    #logo {
      margin-top: 10px;
      display: block;
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
