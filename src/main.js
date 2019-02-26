import Vue from 'vue';
import Router from 'vue-router';
import TodosApp from './TodosApp.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

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
Vue.use(ElementUI);

new Vue({
	router,
	render: h => h(TodosApp),
}).$mount('#app');

