import Vue from 'vue';
import Router from 'vue-router';
import TodosApp from './TodosApp.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(Vuex);

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
		todos: [
			{
				id: 1,
				title: 'Clean apartment',
				isDone: false
			},
			{
				id: 2,
				title: 'Do breakfast',
				isDone: false
			},
			{
				id: 3,
				title: 'Learn Vue',
				isDone: false
			}
		]
	},
	getters: {},
	mutations: {
		addNew(state, todo) {
			state.todos.push(todo);
		},
		deleteTodo(state, todos) {
			state.todos = todos;
		},
		toggleTodo(state, id) {
			const todo = state.todos.find(todo => todo.id === id);
			todo.isDone = !todo.isDone;
		}
	},
	actions: {
		createNewTodo({ commit, state }, newTitle) {
			const todo = {
				id: createId(state.todos),
				title: newTitle,
				isDone: false
			};
			commit('addNew', todo);
		},
		deleteTodo({ commit, state }, id) {
			const todos = state.todos.reduce((acc, todo) => {
				if (id !== todo.id) {
					acc.push(todo);
					return acc;
				}
				return acc;
			}, []);
			commit('deleteTodo', todos)
		},
		toggleTodo({ commit }, id) {
			commit('toggleTodo', id);
		}
	}
});

new Vue({
	store,
	router,
	render: h => h(TodosApp),
}).$mount('#app');