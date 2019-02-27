<template>
	<div class='todos'>
		<TodoForm v-on:add-new='addNew' />
		<TodoList v-bind:todos='todos' v-on:delete-item='handleDel'/>
	</div>
</template>

<script>
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function createId(collection) {
	const ids = collection.map(todo => todo.id);
	if (ids.length === 0) {
		return 1;
	}
	return Math.max(...ids) + 1;
}

export default {
	name: 'Home',
	components: {
		TodoList,
		TodoForm
	},
	methods: {
		handleDel(id) {
			this.todos = this.todos.reduce((acc, todo) => {
				if (id !== todo.id) {
					acc.push(todo);
					return acc;
				}
				return acc;
			}, []);
		},
		addNew(newTitle) {
			const todo = {
				id: createId(this.todos),
				title: newTitle,
				isDone: false
			};
			this.todos.push(todo);
		}
	},
	data() {
		return {
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
		}
	}
}
</script>

<style scoped>
	.todos {
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid #dcdfe6;
	}
</style>
