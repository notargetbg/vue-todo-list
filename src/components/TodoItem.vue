<template>
	<div class='todo-item d-flex'>
		<el-checkbox v-on:change='toggleTodoStatus'>
			{{item.title}}
		</el-checkbox>
		<i v-on:click='deleteItem' class='el-icon-close'></i>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'TodoItem',
	props: ['item'],
	methods: {
		...mapActions([
			'deleteTodo',
			'toggleTodo'
		]),
		deleteItem() {
			this.deleteTodo(this.item.id);
		},
		toggleTodoStatus() {
			this.toggleTodo(this.item.id);
		}
		
	},
}
</script>

<style scoped>
	.el-icon-close {
		color: #f56c6c;
		margin-left: auto;
		font-weight: bold;
		cursor: pointer;
	}
</style>
