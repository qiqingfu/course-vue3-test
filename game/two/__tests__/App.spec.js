import App from "../App.vue";
import { mount } from "@vue/test-utils"

describe("App.vue", () => {
  test("小试牛刀", () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain("App")
  });
});
