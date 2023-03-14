module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  /* -------------------------------------------------------------------------- */
  overrides: [],
  /* -------------------------------------------------------------------------- */
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks', 'jsx-a11y', 'html', 'prettier'],
  rules: {
    /* -------------------------------------------------------------------------- */
    'import/no-unresolved': 'off',
    // var는 사용할 수 없다
    'no-var': ['error'],
    // 줄바꿈은 경고하지 않는다.
    'linebreak-style': 0,
    // Function.prototype.apply() 를 사용할 때는 spread 연산자를 사용해야 한다
    'prefer-spread': ['error'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // Function 객체에 new 연산자를 사용할 수 없다
    'no-new-func': ['error'],
    // goto 구문의 label을 사용할 수 없다
    'no-labels': ['error'],
    // 프로토타입을 동적으로 확장할 수 없다
    'no-extend-native': ['error'],
    // eval을 사용할 수 없다
    'no-eval': ['error'],
    // 생성자 함수는 return을 할 수 없다
    'no-constructor-return': ['error'],
    // if 문에서 return을 하면 else 문에서 return을 할 수 없다
    'no-else-return': ['error'],
    // 안전하지 못한 옵셔널 체이닝을 할 수 없다
    'no-unsafe-optional-chaining': ['error'],
    // 불필요한 반복문은 사용할 수 없다
    'no-unreachable-loop': ['error'],
    // 도달하지 못하는 코드는 사용할 수 없다
    'no-unreachable': ['error'],
    // import한 심볼은 읽기 전용이다
    'no-import-assign': ['error'],
    // 파라미터는 읽기 전용이다
    'no-param-reassign': ['error'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],
    // if ~ else 중첩은 허용하지 않는다
    'max-depth': [
      'error',
      {
        max: 1,
      },
    ],
    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 삼항연산자를 허용하지 않는다
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // computed property 앞뒤에는 공백이 있어야 한다.
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    // 중첩된 object 앞뒤에는 공백이 있어야 한다.
    'object-curly-spacing': ['error', 'always'],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    'array-bracket-spacing': ['error', 'never'],
    // 중괄호의 스타일을 통일
    'brace-style': ['error'],
    // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
    curly: ['error', 'multi-line', 'consistent'],
    // debugger 는 사용을 권장하지 않는다
    'no-debugger': ['warn'],
    // no-alert 룰과 충돌하므로 끔
    'no-restricted-globals': ['off'],
    // alert, confirm, prompt 는 사용을 권장하지 않는다
    'no-alert': ['warn'],
    // console.log 는 사용할 수 없다
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    // jsx에는 쌍 따옴표를 사용해야 한다.
    'jsx-quotes': ['error', 'prefer-double'],
    // 문자열 연결에는 템플릿 문자열을 사용해야 한다
    'prefer-template': ['error'],
    // 객체의 프로퍼티 이름은 필요할 때만 따옴표로 감싸야 한다
    'quote-props': ['error', 'as-needed'],
    /* -------------------------------------------------------------------------- */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/button-has-type': 'warn',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        multiline: 'last',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{./**/*.module.css,./**/*.css}',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'unknown'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/anchor-has-content': [
      'warn',
      {
        components: ['Link'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // 'react-hooks/exhaustive-deps': [
    //   "warn",
    //   {
    //     'addionalHooks': 'useRecoilCallback'
    //   }
    // ]
  },
};
