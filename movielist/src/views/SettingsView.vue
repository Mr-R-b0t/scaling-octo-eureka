<template>
    <body>
        <img
        alt="Vue logo"
        src="../assets/logo.png"
        width="40"
        id="logo"
        class="center"
        />
        <h1>Settings</h1>
        <div id="settings">
            <h3>Email</h3>
            <p>Your email</p>
            <h3>Change password</h3>
            <form>
                <label for="password">New password</label>
                <input type="text" name="password" required>
                <label for="repeatpassword">Repeat password</label>
                <input type="text" name="repeatpassword" required>
                <input id="submitButton" type="submit">
            </form>
            <button id="delete">Delete account</button>
            <h3>About</h3>
            <p>Website created by Alex COLIN-MICHEL, Sébastien MEYNET, Rémi, and Dorian TURGOT</p>
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

    h2 {
        position : relative;
        left: 580px;
        font-size: 20px;
        font-family: 'Raleway';
        font-style: normal;
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 500px;
    }

    #password, #email {
        font-size: 1.5em;
        border-bottom: 2px solid white;
    }

    #delete {
        background-color: red;
        color: white;
        border-radius: 7px;
        border-width: 1px;
        width: 110px;
        height: 25px;
    }

    #delete:hover {
        opacity: 0.7;

    }

    input[type="password"], input[type="email"]
    {
        background: transparent;
        border: none;
    }
</style>
