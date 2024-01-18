module.exports = {
    env: {
        es2023: true,
        browser: true,
        commonjs: true,
        jest: true,
        node: true,
    },
    extends: [
        'react-app/jest',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    ignorePatterns: ['build', '.*js', 'node_modules'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
           // Turn off 'react/prop-types' rule
    'react/prop-types': 'off',

    // Turn off '@typescript-eslint/no-unused-vars'
    '@typescript-eslint/no-unused-vars': 'off',

    // Turn off '@typescript-eslint/no-explicit-any'
    '@typescript-eslint/no-explicit-any': 'off',

    // Turn off '@typescript-eslint/no-useless-template-literals'
    '@typescript-eslint/no-useless-template-literals': 'off',

    // Turn off '@typescript-eslint/array-type'
    '@typescript-eslint/array-type': 'off',

    // Turn off '@typescript-eslint/prefer-promise-reject-errors'
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

         'no-useless-template-literals': 'off',
        'prefer-promise-reject-errors': 'off',
     "react/react-in-jsx-scope": "off",
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
