import { mount } from "@vue/test-utils";
import TodoList from "../TodoList.vue";

describe("TodoList.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(TodoList);
  });
  test("renders a todo", () => {
    expect(wrapper.html()).toContain("Learn Vue.js 3");
  });

  test("creates a todo", async () => {
    const form = wrapper.find("form");
    const val = "Hello,EveryBody";
    await wrapper.setData({ newTodo: val });
    await form.trigger("submit");
    const checkboxs = wrapper.findAll('[type="checkbox"]');
    expect(checkboxs.length).toBe(2);
    expect(wrapper.html()).toContain(val);
  });

  test("completes a todo", async () => {
    const checkbox = wrapper.find('[type="checkbox"]');
    await checkbox.trigger("click");
    const divs1 = wrapper.findAll(".completed");
    expect(divs1.length).toBe(1);
    await checkbox.trigger("click");
    const divs2 = wrapper.findAll(".completed");
    expect(divs2.length).toBe(0);
  });
});
