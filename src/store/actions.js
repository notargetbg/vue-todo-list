import Vue from "vue";
const BASE_URL = process.env.NODE_ENV === 'production' ? '/API' : 'http://localhost:5000/API';

function orderById(collection) {
	return collection.sort((a, b) => {
		return a.id - b.id;
	});
}

export default {
	async getTodos({ commit, state }) {
		commit('recieveTodosStarted');
		
		await Vue.axios.get(`${BASE_URL}/todos`)
			.then(response => {
				commit('recieveTodos', orderById(response.data.todos))
			})
			.catch(e => {
				state.isLoading = false;
				throw new Error(e);
			});
		
	},
	async toggleTodo({ commit, state }, id) {
		const todo = state.todos.find(todo => todo.id === id);

		await Vue.axios.put(`${BASE_URL}/todos/${id}`, {
			isDone: !todo.isDone
		})
			.then(response => {
				commit('toggleTodo', response.data.todo.id);
			})
			.catch(e => {
				throw new Error(e);
			})
	},
	async deleteTodo({ commit, state }, id) {
		await Vue.axios.delete(`${BASE_URL}/todos/${id}`)
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
	async createNewTodo({ commit, state }, newTitle) {
		const todo = {
			// id: createId(state.todos),
			title: newTitle,
			isDone: false
		};

		await Vue.axios.post(`${BASE_URL}/todos`, {
			title: todo.title,
			isDone: todo.isDone
		})
		.then(response => {
			commit('addNew', response.data.todo);
			
		})
		.catch(e => {
			throw new Error(e);
		})
	}
}