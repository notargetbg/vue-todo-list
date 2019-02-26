<template>
	<div id="app">
		<!-- Nav -->
		<router-link to="/about">About</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'TodosApp',
	components: {
		// Nav
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.vue-logo {
		max-width: 100px;
	}
</style>
