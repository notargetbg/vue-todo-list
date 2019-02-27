<template>
	<div class='todos'>
		<div class='box top-b-radius'>
			<el-form class='d-flex'>
				<el-input placeholder='Add todo' class='todo-title-input'></el-input>	
				<el-button type='primary'>Add</el-button>
			</el-form>
		</div>
		<TodoList v-bind:todos='todos'/>
	</div>
</template>

<script>
import TodoList from '../components/TodoList';

export default {
	name: 'Home',
	components: {
		TodoList
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
	.todo-title-input {
		margin-right: 20px;
	}
</style>
