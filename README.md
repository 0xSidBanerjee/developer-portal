# Bill@Edge Developer Portal

## Overview

This project serves as the developer portal for the Bill@Edge product. It is built with [Next.js](https://nextjs.org/).

### Technologies Used

- [Next.js v14.1.2](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [next-themes](https://github.com/system-ui/theme-ui/tree/main/packages/docs/examples/nextjs)
- [@tanstack/react-query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Local Development

### Prerequisites

- Node.js (20.11.1 LTS) and npm (Node Package Manager)
- Ensure you have the correct version of Node.js installed by checking the `.nvmrc` file or the `engines` field in `package.json`.

### Getting Started

1. Clone the repository:

```bash
git clone https://<personal-access-token>@billedgedev.rssoftware.co.in/billatedge/developer-portal.git
```

2. Navigate to the project directory:

```bash
cd developer-portal
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The application should now be running locally at [http://localhost:3000](http://localhost:3000).

## Naming Convention

### Components

- Use PascalCase for component names.
- Example: `ThemeProvider`

### Component File Name

- Use kebab-case for component file names.
- Example: `src/components/theme-provider.tsx`

## Code style guide
Please adhere to the [Airbnb Style Guide](https://airbnb.io/javascript/). All linting configurations have been mentioned in `.eslintrc.json`. Some modifications have been made to the original airbnb style guide either for convenience or to suit our needs. They are as follows:

1. Semicolons have been disabled, so please do not include them anywhere. 
2. Typescript file imports should not include the extensions (`.tsx`/`.ts`).
3. JSX is allowed in files with `.tsx` extension.
4. Compulsory import of `React` from the `react` package in files with JSX in them has been disabled. Hence, `import React from 'react'` is not compulsory in every file with JSX.
5. Prop spreading has been enabled. This allows you to pass props to a component by spreading an object.<br>
For example:
    ```js
    <Person name={person.name} age={person.age} />
    ```
    can also be written as
    ```js
    <Person {...person} />
    ```

## VS Code workspace configuration
Some configurations for tailwind css intellisense and linting compliance have been added in `.vscode/settings.json` which should improve developer experience in VS Code. However, to take advantage of all of them, you need to install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). Here is a single command to install them:
```sh
code --install-extension bradlc.vscode-tailwindcss --install-extension dbaeumer.vscode-eslint
```
Steps to guide developers on configuring the backend URL during build time.

STEPS:
1. There is a file called `.env.production` present in the root directory of the project.
2. Navigate to that file where the developer will find an **environment variable** called `NEXT_PUBLIC_BACKEND_URL`.
3. Change the value of that variable as per requirement and the backend URL during build time will be configured in this manner.

Alternatively, `NEXT_PUBLIC_BACKEND_URL` maybe set in the terminal as well, which will override the one in the `.env.production` file.
