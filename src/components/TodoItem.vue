<template>
	<div class='todo-item d-flex'>
		<el-checkbox v-model='item.isDone'>
			{{item.title}}
		</el-checkbox>
		
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['item']
}
</script>

<style scoped>
	
</style>
