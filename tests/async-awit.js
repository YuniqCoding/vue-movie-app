import { asyncFn } from "./example";

// describe("비동기 테스트", () => {
//   test("done", () => {
//     // 비동기 함수의 경우 기다리지 않고 통과시켜버린다
//     asyncFn().then((res) => {
//       expect(res).toBe("Done?");
//     });
//   });
// });

// describe("비동기 테스트", () => {
//   // 첫번째 해결방법, 함수를 받아와서 비동기가 종료되는 시점을 알려준다.
//   test("done", (done) => {
//     asyncFn().then((res) => {
//       expect(res).toBe("Done!");
//       done();
//     });
//   });
//   // 두번째 해결방법, return을 통해서 비동기 함수가 동작하고 있다는것을 알려준다.
//   test("then", () => {
//     return asyncFn().then((res) => {
//       expect(res).toBe("Done!");
//     });
//   });
//   // 세번째 해결방법, resolves를 사용해서 성공한 경우의 값을 제대로 가져온다.
//   test("resolves", () => expect(asyncFn()).resolves.toBe("Done!"));
//   // 네번째 해결방법, anyc/await를 사용해서 비동기 함수를 기다려준다.
//   test("async/await", async () => {
//     const res = await asyncFn();
//     expect(res).toBe("Done!");
//   });
// });

// 세번째 인자로 최대 테스트 시간을 설정 가능
describe("비동기 테스트", () => {
  test("async/await", async () => {
    const res = await asyncFn();
    expect(res).toBe("Done!");
  }, 7000);
});
