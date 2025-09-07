# Test Task

## About the project

This project is a test assignment

## Main Technology Stack

- `React`
- `TypeScript` strict typing
- `css modules (with sass)` for component styling
- `Vite` a build tool
- `AntDesign` for tables
- `chart.js (react-chartjs-2)` for charts
- `axios` for server requests


## Installation

To run the project, you need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).

1. Clone the repository:

```
git clone https://github.com/Wood85/test-task.git
```

2. Install dependencies:

```
npm install
```

3. To run the application in development mode, use:

```
npm run dev
```

## Project Architecture Overview

Folders used:

- `app` — project entry point
- `components` — main folder for all reusable components
- `data` — main folder for all data
- `definitions` — folder with TypeScript types and interfaces used throughout the project for strict typing
- `hooks` — hooks
- `pages` — page components
- `services` — services for server communication
- `styles` — global styles, such as color variables for consistent design
  - `_functions.scss` — functions used in CSS modules
  - `_variables.scss` — variables used in CSS modules
- `utils` — helper and utility functions

### Styling Approach

Each component has its own SCSS module named after the component

## Re-exports and Aliases

- Re-exports: To simplify imports and improve project structure, components and modules are re-exported through index files, allowing shorter and cleaner imports in different parts of the app

- Import aliases: Aliases are configured for easier imports across the project. Aliases are defined in `tsconfig.app.json` and `vite.config.js`, allowing imports without using relative paths.

## Main Branches

- **`main`**: stable version. Only completed features are merged here
- **`dev`**: main development branch. All feature and bugfix branches are merged into `dev`