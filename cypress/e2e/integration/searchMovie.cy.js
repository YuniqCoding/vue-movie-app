/**
 * 검색(메인) 페이지로 접근한 후
 * 영화 제목을 'frozen'으로, 표시 개수를 30개로 입력하고,
 * 'Apply' 버튼을 클릭해 영화 목록을 검색합니다.
 * 영화 목록 30개 잘 출력됩니다.
 * 영화 목록에서 'Frozen II'(겨울왕국2) 영화 아이템을 클릭하면,
 * 영화 상세 정보 페이지로 이동합니다.
 * 상세 정보 페이지에서 정보를 확인할 수 있습니다.
 */

describe("영화 검색(겨울왕국2)", () => {
  it("검색 페이지로 접근합니다.", () => {
    cy.visit("/");
    // get으로 가져온 요소에 Search 텍스트가 있는지 확인
    cy.get("header .nav-link.active").contains("Search");
  });
  it("영화를 검색합니다.", () => {
    // type 함수로 실제 'frozen'이라는 글자 타이핑
    cy.visit("/");
    cy.get("input.form-control").type("frozen");
    // 두번째 선택값인 number에서 30을 선택해준다
    cy.get("select.form-select:nth-child(2)").select("30");
    // Apply 텍스트가 있는 버튼 클릭
    cy.get("button.btn").contains("Apply").click();
    // 비동기 처리를 위해 2초 기다리기
    cy.wait(2000);
    // movie 부분 찾아와서 실제로 30개가 출력되는지 확인
    cy.get(".movie").should("have.length", 30);
    // 해당 영화 제목에 'Frozen II'가 포함되어있으면 클릭
    cy.get(".movie .title").contains("Frozen II").click();
    // 현재 링크에 겨울왕국2의 아이디가 들어가있는지 확인
    cy.url().should("inFclude", "/movie/tt4520988");
    cy.wait(1000);
    // 현재 탭이 Movie로 활성화되어있는지 확인
    cy.get("header .nav-link.active").contains("Movie");
    // 제목이 'Frozen II'가 맞는지 확인
    cy.get(".title").contains("Frozen II");
  });
});
