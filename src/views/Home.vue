<template>
	<div class='todos'>
		<TodoForm />
		<TodoList v-bind:todos='getTodos' />
	</div>
</template>

<script>
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

export default {
	name: 'Home',
	components: {
		TodoList,
		TodoForm
	},
	computed: {
		getTodos() {
			return this.$store.state.todos;
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
