module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/component/example.spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component/example.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/component/example.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        templateFile: 'templates/component/example.component.tsx.hbs'
      }
    ]
  })
}
