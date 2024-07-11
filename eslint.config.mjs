import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }

  {
    root: true,
    extends: [
      "@nuxtjs/eslint-config-typescript",
      "plugin:prettier/recommended"
    ],
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "@typescript-eslint/no-unused-vars": "off",
      'no-console': 'off'
    }
  }
)
