import Vue from 'vue';
import Router from 'vue-router';
import TodosApp from './TodosApp.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
 

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

function orderById(collection) {
	return collection.sort((a, b) => {
		return a.id - b.id;
	});
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
		createNewTodo({ commit, state }, newTitle) {
			const todo = {
				// id: createId(state.todos),
				title: newTitle,
				isDone: false
			};

			Vue.axios.post(`http://localhost:5000/API/todos`, {
				title: todo.title,
				isDone: todo.isDone
			})
			.then(response => {
				commit('addNew', response.data.todo);
				
			})
			.catch(e => {
				throw new Error(e);
			})
		},
		deleteTodo({ commit, state }, id) {
			Vue.axios.delete(`http://localhost:5000/API/todos/${id}`)
				.then(response => {
					const todos = state.todos.reduce((acc, todo) => {
						if (response.data.id !== todo.id) {
							acc.push(todo);
							return acc;
						}
						return acc;
					}, []);

					commit('recieveTodos', todos)
				})
				.catch(e => {
					throw new Error(e);
				})
		},
		toggleTodo({ commit, state }, id) {
			const todo = state.todos.find(todo => todo.id === id);

			Vue.axios.put(`http://localhost:5000/API/todos/${id}`, {
				isDone: !todo.isDone
			})
				.then(response => {
					commit('toggleTodo', response.data.todo.id);
				})
				.catch(e => {
					throw new Error(e);
				})
		},
		getTodos({ commit }) {
			commit('recieveTodosStarted');
			Vue.axios.get(`http://localhost:5000/API/todos`)
				.then(response => {
					commit('recieveTodos', orderById(response.data.todos))
					
				})
				.catch(e => {
					throw new Error(e);
				})
			
		}
	}
});

new Vue({
	store,
	router,
	render: h => h(TodosApp),
}).$mount('#app');