/**
 * 메인 페이지로 접근 후,
 * Header About 네비게이션 버튼 클릭,
 * About 페이지에서 정보 확인,
 * 잠시 Movie 페이지로 이동 후,
 * Header 사용자 로고 클릭,
 * 다시 About 페이지에서 정보 확인
 */

describe("About 페이지로 이동", () => {
  it("테스트 함수", () => {
    // 홈페이지 방문
    cy.visit("/");
    // Search 버튼 활성화 여부 확인
    cy.get("header .nav-link.active").contains("Search");
    // About 버튼 클릭
    cy.get("header .nav-link").contains("About").click();
    // 현재 주소에 /about이 있는지 확인
    cy.url().should("include", "/about");
    // 1초 대기
    cy.wait(1000);
    // About 버튼 활성화 여부 확인
    cy.get("header .nav-link.active").contains("About");
    // name 부분에 내 이름 출력 여부 확인
    cy.get(".name").contains("YURA");
    // 영화의 상세 페이지로 이동하는 Movie 탭 클릭
    cy.get("header .nav-link").contains("Movie").click();
    // 현재 주소에 /movie가 있는지 확인
    cy.url().should("include", "/movie");
    // 다시 로고 클릭
    cy.get("header .user").click();
    // 현재 주소에 /about이 있는지 확인
    cy.url().should("include", "/about");
    // 1초 대기
    cy.wait(1000);
    // About 버튼 활성화 여부 확인
    cy.get("header .nav-link.active").contains("About");
    // name 부분에 내 이름 출력 여부 확인
    cy.get(".name").contains("YURA");
  });
});
