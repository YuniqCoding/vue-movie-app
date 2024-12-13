import { shallowMount } from "@vue/test-utils";
import router from "~/routes";
import store from "~/store";
import Header from "~/components/Header";

describe("components/Header.vue", () => {
  let wrapper;
  // 매 테스트마다 wrapper를 초기화시켜준다
  beforeEach(async () => {
    // 실제 ScrollTo 함수처럼 동작하도록 모의 함수 생성
    window.scrollTo = jest.fn();
    router.push("/movie/tt1234567");
    await router.isReady();
    wrapper = shallowMount(Header, {
      // 전역으로 플러그인을 등록시켜준다
      global: {
        plugins: [router, store],
      },
    });
  });

  test("경로 정규표현식이 없는 경우 일치하지 않습니다.", () => {
    const regExp = undefined;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  });
  test("경로 정규표현식과 일치해야 합니다.", () => {
    const regExp = /^\/movie/;
    expect(wrapper.vm.isMatch(regExp)).toBe(true);
  });
  test("경로 정규표현식과 일치하지 않아야 합니다.", () => {
    const regExp = /^\/yura/;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  });
});
