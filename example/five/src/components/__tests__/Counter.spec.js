import Counter from "../Counter.vue";
import Child from "../Child";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

describe("Counter.vue", () => {
  test("emits an event when clicked with v1", async () => {
    const wrapper = mount(Counter);
    await wrapper.find('[data-test="button"]').trigger("click");
    /**
     * emitted 包含 wrapper.vm 组件实例发出的自定义事件对象
     */
    expect(wrapper.emitted()).toHaveProperty("increment");
  });

  test("emits an event when clicked with v2", async () => {
    const wrapper = mount(Counter);
    await wrapper.find('[data-test="button"]').trigger("click");
    expect(wrapper.emitted().increment[0]).toEqual([1]);
  });

  test("emits an event when clicked with v3", async () => {
    const wrapper = mount(Counter);
    await wrapper.find('[data-test="button"]').trigger("click");
    expect(wrapper.emitted().increment[0][0]).toEqual({
      count: 1,
      isEven: false
    });
    await wrapper.find('[data-test="button"]').trigger("click");
    expect(wrapper.emitted().increment[1][0]).toEqual({
      count: 2,
      isEven: true
    });
  });

  test("trigger with args", async () => {
    const wrapper = mount(Counter);
    await wrapper.find('[data-test="button"]').trigger("click", { code: 1 });
    expect(wrapper.emitted().increment[0][0]).toBe(1);
  });

  describe("emit input", () => {
    test("child to parent event", async () => {
      const wrapper = mount(Counter);
      const childWrapper = wrapper.findComponent(Child);
      await childWrapper.vm.$emit("to-parent");
      await flushPromises();
      expect(wrapper.html()).toContain("0 true");
    });
  });
});
