import TodoList from '@/components/TodoList.vue';

describe("TodoList", () => {
  it("has a created hook", () => {
    expect(typeof TodoList.created).toBe('function')
  })
});