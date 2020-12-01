import { mount } from "@vue/test-utils"
import App from "../App.vue";

describe("App.vue", () => {
  test("小试牛刀", () => {
    const wrapper = mount(App)
    console.log(wrapper)
  });
});
