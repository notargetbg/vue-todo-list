<template>
	<div class='box top-b-radius'>
		<el-form class='d-flex'>
			<el-input placeholder='Add todo' @keyup.enter.prevent.native='addNew' v-model='newTitle' class='todo-title-input'></el-input>	
			<el-button type='primary' @click='addNew'>Add</el-button>
		</el-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'TodoForm',	
	methods: {
		...mapActions([
			'createNewTodo'
		]),
		addNew() {
			if (!this.newTitle) {
				return;
			}
			this.createNewTodo(this.newTitle);
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
