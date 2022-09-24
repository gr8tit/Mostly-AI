// module.exports = {
//   projectId: '93jsp2',
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// };

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "93jsp2",
  reporter: "junit",

   reporterOptions: {
    mochaFile: 'results/my-test-output.[hash].xml',
    toConsole: true

  },

  e2e: {
    supportFile: false,
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
