import { mount, shallowMount } from "@vue/test-utils";
import Parent from "./Parent";

// stub은 가짜라는 의미로 모의함수랑 비슷한 개념
// mount : 하위 요소들까지 모두 렌더링되면서
//요소를 가져오기 때문에 테스트가 오래 걸린다
// shallowMount : 최소한의 단위를 테스트하기 때문에 더 권장된다.
test("Mount", () => {
  const wrapper = shallowMount(Parent);
  // expect(wrapper.html()).toBe("");
});
