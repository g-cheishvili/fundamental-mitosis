# Fundamental mitosis

Project was generated using NX CLI. It is a monorepo with few library groups. One is mitosis.js group. There you can see
the source files for generations. It contains
* Button - mitosis-button
* Card - mitosis-card
* Checkbox - mitosis-checkbox
* Form-item - mitosis-form-item
* Icon - mitosis-icon
* List - mitosis-list
* Segmented button - mitosis-segmented-button
* Textarea - mitosis-textarea
* Shared library - mitosis-shared

Project also contains Angular and React base projects. In Angular, you can see Control Value Accessor implementation for all components.

## Running compilation
To compile mitosis components into usable framework version of them you need to type in terminal
```bash
nx run-many --target=compile --projects={PROJECT_NAME} --targetFrameworks={react|angular} --parallel=1
```
Where PROJECT_NAME is the name of the project you want to compile. You can also compile all projects by typing
```bash
nx run-many --target=compile --all --targetFrameworks={react|angular} --parallel=1
```

## Adding new component
To add new component you need to type in terminal
```bash
yarn run create:component {COMPONENT_NAME}
```
Where COMPONENT_NAME is the name of the component you want to create. It will create new component in mitosis.js group.

## Structure
* `apps` - contains Angular base project
* `tools` - contains scripts for compilation
  * `generators/compile-component/files/{angular|react}` - contains target specific files. Like module, or public api file
  * `generators/compile-component/utils/plugins` - contains plugins for mitosis.js
  * `generators/create-component/files` - contains template files for new component

## How does this work?

You write code mainly in `libs/mitosis` folder, where all mitosis based component libraries are. When you're done,
you type compilation command. Executor will trigger generator. Generator is responsible for calling mitosis compiler.
Mitosis compiler will compile your components into framework specific code. Then nx generator will try to generate
missing files by the template written in `generators/compile-component/files/{angular|react}` folder
