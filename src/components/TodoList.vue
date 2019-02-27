<template>
	<div>
		<div class='box' v-bind:key='item.id' v-for='item in todos' >
			<TodoItem v-bind:item='item'/>
		</div>
		<div class='box no-items' v-if='todos.length === 0'>
			No items
		</div>
	</div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
	props: ['todos']
}
</script>

<style scoped>
	.no-items {
		text-align: center;
		color: #a6a6a6;
	}
</style>
