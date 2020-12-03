import Parent from "@/components/Parent";
import { mount, shallowMount } from "@vue/test-utils";

test("with mount", () => {
  const wrapper = mount(Parent);
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("child");
});

test("with shallowMount", () => {
  const wrapper = shallowMount(Parent);
  console.log(wrapper.html());
});
