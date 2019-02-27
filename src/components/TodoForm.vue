<template>
	<div class='box top-b-radius'>
		<el-form class='d-flex'>
			<el-input placeholder='Add todo' v-model='newTitle' class='todo-title-input'></el-input>	
			<el-button type='primary' @click='addNew'>Add</el-button>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'TodoForm',	
	methods: {
		addNew() {
			this.$emit('add-new', this.newTitle);
			this.newTitle = '';
		}
	},
	data() {
		return {
			newTitle: '',
		};
	}
}
</script>

<style scoped>
	.todo-title-input {
		margin-right: 20px;
	}
</style>
