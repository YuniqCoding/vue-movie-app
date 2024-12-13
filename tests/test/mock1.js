import * as example from "./example";

describe("비동기 테스트", () => {
  test("async/await", async () => {
    // example 객체 데이터 내부에서 asyncFn이라는 가짜 함수 생성
    // 가짜 함수 안쪽에 Done? 이라는 데이터를 보냄
    // 실제 함수를 가짜 함수로 만들어서 원하는 데이터만 반환 -> 모킹
    // 그리고 그렇게 만들어진 함수 -> 모의 함수
    jest.spyOn(example, "asyncFn").mockResolvedValue("Done?");
    const res = await example.asyncFn();
    expect(res).toBe("Done!");
  }, 7000);
});
