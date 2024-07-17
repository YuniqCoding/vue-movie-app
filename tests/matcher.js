const userA = {
  name: "YURA",
  age: 80,
};
const userB = {
  name: "Reo",
  age: 22,
};

// 참조형 데이터들을 값으로 비교할 때는 toEqual로 비교한다
// 데이터를 비교하는 메소드를 Matcher라고 한다
test("데이터가 일치해야 합니다", () => {
  expect(userA.age).toBe(80);
  expect(userA).toEqual({
    name: "YURA",
    age: 80,
  });
});

//not은 브릿지로 테스트 결과를 반대로 보여준다
test("데이터가 일치하지 않아야 합니다.", () => {
  expect(userB.name).not.toBe("YURA");
  expect(userB).not.toBe(userA);
});
