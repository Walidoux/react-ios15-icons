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
      },
      {
        type: 'confirm',
        name: 'hasProps',
        message: 'Are you willing to give him custom props ?'
      }
    ],
    actions: (data) => {
      let currentActions = [
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
          template: `export const {{ properCase name }}: IconProps${
            data.hasProps ? '<{{ properCase name }}Props>' : ''
          }`
        }
      ]

      if (data.hasProps)
        currentActions.push(
          {
            type: 'append',
            path: 'src/IconProps.ts',
            templateFile: 'generators/IconProps.ts.hbs'
          },
          {
            type: 'append',
            path: 'src/index.d.ts',
            pattern: /(\/\/\/ @GENERATORS: COMPONENT IMPORTS)/g,
            template: '{{ properCase name }},'
          }
        )

      return currentActions
    }
  })
