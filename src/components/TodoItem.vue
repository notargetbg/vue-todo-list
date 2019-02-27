<template>
	<div class='todo-item d-flex'>
		<el-checkbox v-on:change='toggleTask'>
			{{item.title}}
		</el-checkbox>
		<i v-on:click='deleteItem' class='el-icon-close'></i>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['item'],
	methods: {
		deleteItem() {
			this.$emit('delete-item', this.item.id);
		},
		toggleTask() {
			this.item.isDone = !this.item.isDone;
		}
	}
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
