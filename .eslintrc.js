module.exports = {
   settings: {
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    plugins: [],
    rules: {
      "no-func-assign":"off"
    }
};
