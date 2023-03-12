<template>
    <body>
        <h1>Settings</h1>
        <div class="settings">
            <h3>Email</h3>
            <p>Your email</p>
            <h3>Change password</h3>
            <form>
                <label for="password">New password</label> <br>
                <input type="text" name="password" required class="input"> <br>
                <label for="repeatpassword">Repeat password</label><br>
                <input type="text" name="repeatpassword" required class="input">
                <input id="submitButton" type="submit" value="Confirm" class="button confirm">
            </form>
            <button class="button delete">Delete account</button>
            <h3>About</h3>
            <p>Website created by Alex COLIN-MICHEL, Sébastien MEYNET, Rémi, and Dorian TURGOT</p>
        </div>
    </body>
</template>
<style>
@import '../assets/scss/settings.scss'
</style>
