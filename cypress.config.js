const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: "http://localhost:8080", // 기본 url 지정
    viewportWidth: 1400, // 뷰포트 너비
    viewportHeight: 800, // 뷰포트 높이
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
