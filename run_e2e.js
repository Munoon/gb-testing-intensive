const cypress = require("cypress");

const browser = process.argv.length > 2 ? process.argv[2] : 'chrome';

cypress.run({
  reporter: "junit",
  browser,
  headless: "true",
  config: {
    baseUrl: "http://localhost:3000",
    video: true,
  },
  env: {
    login_url: "/login",
    products_url: "/products",
  },
});
