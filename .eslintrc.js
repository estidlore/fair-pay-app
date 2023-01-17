module.exports = {
  env: {
    amd: true,
    browser: true,
    jest: true,
    node: true,
    "react-native/react-native": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    JSX: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "simple-import-sort"
  ],
  root: true,
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: ["signature", "field", "constructor", "method"]
      }
    ],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "comma-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "max-lines": [
      "error",
      {
        max: 200,
        skipBlankLines: false,
        skipComments: false
      }
    ],
    "no-restricted-syntax": ["error", "ExportDefaultDeclaration"],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        children: "always",
        props: "always"
      }
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-max-depth": [
      "error",
      {
        max: 5
      }
    ],
    "react/jsx-no-literals": "error",
    "react/jsx-one-expression-per-line": [
      "error",
      {
        allow: "single-child"
      }
    ],
    "react/jsx-sort-props": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-children-prop": "error",
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: false
      }
    ],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        allowExpressions: true
      }
    ],
    "react/react-in-jsx-scope": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports
          ["^\\u0000"],
          // Node.js builtins
          ["^node:"],
          // External packages
          ["^@?\\w"],
          // Internal packages
          ["^(assets|components|types|utils|views)"],
          // Relative imports
          ["^\\."]
        ]
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "sort-keys": ["error", "asc"],
    "sort-vars": [
      "error",
      {
        ignoreCase: true
      }
    ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        paths: ["src"]
      }
    },
    react: {
      version: "detect"
    }
  }
};
