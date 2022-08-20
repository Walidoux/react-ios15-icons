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
        name: 'hasFilledProp',
        message: 'Does this icon require the [filled] prop ?'
      },
      {
        type: 'confirm',
        name: 'hasCustomProps',
        message: 'Are you willing to give him custom props ?'
      }
    ],
    actions: (data) => {
      let currentActions = [
        {
          type: 'add',
          path: 'src/icons/{{ properCase name }}.tsx',
          templateFile: data.hasFilledProp
            ? data.hasCustomProps
              ? 'generators/FilledIconProps.tsx.hbs'
              : 'generators/FilledIcon.tsx.hbs'
            : data.hasCustomProps
            ? 'generators/IconProps.tsx.hbs'
            : 'generators/Icon.tsx.hbs'
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
            data.hasCustomProps
              ? `<{{ properCase name }}Props${
                  data.hasFilledProp ? ', true' : ''
                }>`
              : ''
          }`
        }
      ]

      if (data.hasCustomProps)
        currentActions.push(
          {
            type: 'append',
            path: 'src/IconProps.ts',
            template:
              'export interface {{ properCase name }}Props { defaultProp: unknown }'
          },
          {
            type: 'append',
            path: 'src/index.d.ts',
            pattern: /(\/\/\/ @GENERATORS: COMPONENT IMPORTS)/g,
            template: '{{ properCase name }}Props,'
          }
        )

      return currentActions
    }
  })
