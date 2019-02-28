<template>
	<div>
		<div class='box' v-bind:key='item.id' v-for='item in todos' >
			<TodoItem v-bind:item='item' />
		</div>
		<div class='box no-items' v-if='!isLoading && todos.length === 0'>
			No items
		</div>
		<div class='box' v-if='isLoading'>
			<div v-loading='isLoading'></div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TodoItem from './TodoItem';

export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
	computed: {
		...mapState([
			'todos',
			'isLoading'
		])
	},
	methods: {
		...mapActions(['getTodos'])
	},
	created() {
		this.getTodos();		
	}
}
</script>

<style scoped>
	.no-items {
		text-align: center;
		color: #a6a6a6;
	}
</style>
