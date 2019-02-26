import Vue from 'vue';
import Router from 'vue-router';
import TodosApp from './TodosApp.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.config.productionTip = false;

const router = new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		}
	]
});

Vue.use(Router);

new Vue({
	router,
	render: h => h(TodosApp),
}).$mount('#app');

