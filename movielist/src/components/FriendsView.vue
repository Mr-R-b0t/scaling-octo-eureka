<!-- need to implement this view as a right sidebar (like in figma) -->
<template>
    <b-sidebar id="right-sidebar" right>
        <div id="sidebar">
            <h2>Friends activity</h2>
            <div class="side-bar-menu">
                <div class="friend">
                    <a><img class="friendImage" src="pp.jpg">
                        <h4 class="friend-name">Pablo Escobar</h4>
                    </a>
                    <progress value="30" max="100"></progress>
                </div>
                <div class="friend">
                    <a><img class="friendImage" src="pp.jpg">
                        <h4 class="friend-name">Okba Loan</h4>
                    </a>
                    <progress value="80" max="100"></progress>
                </div>
                <div class="friend">
                    <a><img class="friendImage" src="pp.jpg">
                        <h4 class="friend-name">Ilam Az</h4>
                    </a>
                    <progress value="50" max="100"></progress>
                </div>
            </div>
        </div>
    </b-sidebar>
</template>

<style>
@import '../assets/scss/friends-side-bar.scss'
</style>
