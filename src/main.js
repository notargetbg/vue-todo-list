import Vue from 'vue';
import Router from 'vue-router';
import TodosApp from './TodosApp.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import actions from './store/actions.js';
 

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

function createId(collection) {
	const ids = collection.map(todo => todo.id);
	if (ids.length === 0) {
		return 1;
	}
	return Math.max(...ids) + 1;
}

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

const store = new Vuex.Store({
	state: {
		todos: [],
		isLoading: false
	},
	getters: {},
	mutations: {
		addNew(state, todo) {
			state.todos.push(todo);
		},
		recieveTodosStarted(state) {
			state.isLoading = true;
		},
		recieveTodos(state, todos) {
			state.todos = todos;
			state.isLoading = false;
		},
		toggleTodo(state, id) {
			const todo = state.todos.find(todo => todo.id === id);
			todo.isDone = !todo.isDone;
		}
	},
	actions: {
		createNewTodo: actions.createNewTodo,
		deleteTodo: actions.deleteTodo,
		toggleTodo: actions.toggleTodo,
		getTodos: actions.getTodos
	}
});

export const vue = new Vue({
	store,
	router,
	render: h => h(TodosApp),
}).$mount('#app');