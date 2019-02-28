<template>
	<div id='app'>
		<Navigation />
		<el-container>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
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
	html {
		height: 100%;
	}
	body {
		margin: 0;
		height: 100%;
		background: #eaeaea;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.vue-logo {
		max-width: 100px;
	}
	p {
		margin: 0;
	}
	.box {
		padding: 20px;
		background: white;
		border-bottom: 1px solid #dcdfe6;
	}
	.box:last-of-type {
		border-bottom: none;
	}
	.d-flex {
		display: flex;
	}
	.el-loading-spinner {
		margin-top: -15px;
	}
	.el-loading-spinner .circular {
		width: 30px;
		height: 30px;
	}
</style>
