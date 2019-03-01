import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TodoList from '../../src/components/TodoList.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Actions.vue', () => {
	let actions;
	let store;

	beforeEach(() => {
		actions = {
			getTodos: jest.fn(),
		};

		store = new Vuex.Store({
			state: {
				todos: [],
				isLoading: false
			},
			actions
		});
	});

	it('calls store action "getTodos" on mount', () => {
		const wrapper = shallowMount(TodoList, { store, localVue });
		expect(actions.getTodos).toHaveBeenCalled();
		expect(wrapper.vm.todos).toEqual([]);
	});
});