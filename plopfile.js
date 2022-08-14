module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) =>
  plop.setGenerator('icon', {
    description: 'Generate an icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the icon's name ?"
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/icons/{{ properCase name }}.tsx',
        templateFile: 'generators/Icon.tsx.hbs'
      },
      {
        type: 'append',
        path: 'src/index.ts',
        pattern: /(\/\/\/ @GENERATORS: COMPONENT EXPORTS)/g,
        template: "export * from './icons/{{ properCase name }}'"
      },
      {
        type: 'append',
        path: 'src/index.d.ts',
        pattern: /(\/\/\/ @GENERATORS: COMPONENT EXPORTS)/g,
        template: 'export const {{ properCase name }}: Icon'
      }
    ]
  })
