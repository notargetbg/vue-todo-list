<template>
	<div class='todos'>
		<TodoForm />
		<TodoList />
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
	}
}
</script>

<style scoped>
	.todos {
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid #dcdfe6;
		max-width: 900px;
   		margin: auto;
	}
</style>
