module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "off",
        "react/prop-types": "off"
    }
};



