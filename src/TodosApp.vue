<template>
	<div id='app'>
		<Navigation />

		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
	name: 'TodosApp',
	components: {
		Navigation
	}
}
</script>

<style>
	body {
		margin: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.vue-logo {
		max-width: 100px;
	}
</style>
