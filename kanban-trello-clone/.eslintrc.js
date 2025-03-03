module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react', 'jsx-a11y', 'simple-import-sort', 'import'],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            '^(assert|buffer|child_process|crypto|fs|http|https|os|path|stream|util|zlib)(/.*|$)'
          ],
          ['^react', '^(@fluentui|@uifabric)', '^@?\\w'],
          [
            '^(@layouts|@components|@utils|@redux|@API|@pages|utils|config|styles|assets)(/.*|$)'
          ],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$']
        ]
      }
    ],
    'simple-import-sort/exports': 1,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md'
        ]
      }
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    'no-undef': 0,
    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': [0],
    'default-param-last': 0,
    '@typescript-eslint/default-param-last': [0],
    'react/no-unknown-property': 0,
    //import MUI
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@mui/*/*/*']
      }
    ]
  }
};
