import { mount } from "@vue/test-utils";
import Example from "./Example.vue";

test("메시지를 변경합니다.", () => {
  const wrapper = mount(Example);
  // wrapper.vm === this
  expect(wrapper.vm.msg).toBe("Hello Vue test utils?");
});
