import { double } from "./example";

describe("그룹1", () => {
  // 모든 테스트 시작 전에 단 한번 동작한다
  beforeAll(() => {
    console.log("beforeAll!");
  });
  // 모든 테스트 시작 후에 단 한번 동작한다
  afterAll(() => {
    console.log("afterAll!");
  });
  // 각각의 테스트 시작 전마다 동작한다
  beforeEach(() => {
    console.log("beforeEach!");
  });
  // 각각의 테스트 시작 후마다 동작한다
  afterEach(() => {
    console.log("afterEach!");
  });
  test("첫 테스트", () => {
    console.log("첫 테스트");
    expect(123).toBe(123);
  });

  test("인수가 숫자 데이터입니다", () => {
    console.log("인수가 숫자 데이터입니다");
    expect(double(3)).toBe(6);
    expect(double(10)).toBe(20);
  });

  test("인수가 없습니다", () => {
    console.log("인수가 없습니다");
    expect(double()).toBe(0);
  });
});

describe("그룹2", () => {
  // 모든 테스트 시작 전에 단 한번 동작한다
  beforeAll(() => {
    console.log("beforeAll!");
  });
  // 모든 테스트 시작 후에 단 한번 동작한다
  afterAll(() => {
    console.log("afterAll!");
  });
  // 각각의 테스트 시작 전마다 동작한다
  beforeEach(() => {
    console.log("beforeEach!");
  });
  // 각각의 테스트 시작 후마다 동작한다
  afterEach(() => {
    console.log("afterEach!");
  });
  test("첫 테스트", () => {
    console.log("첫 테스트");
    expect(123).toBe(123);
  });

  test("인수가 숫자 데이터입니다", () => {
    console.log("인수가 숫자 데이터입니다");
    expect(double(3)).toBe(6);
    expect(double(10)).toBe(20);
  });

  test("인수가 없습니다", () => {
    console.log("인수가 없습니다");
    expect(double()).toBe(0);
  });
});
