<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
	<header></header>

	<main>
		<div class="login">
			<div class="top-login">
				<h2>Sign in</h2>
			</div>
			<div class="body-login">
				<form action="">
					<input type="text" placeholder="Email id" />
					<input type="text" placeholder="Password" />
					<input type="button" value="Login" />
				</form>
			</div>
		</div>
	</main>
</template>
