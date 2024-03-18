<p align="center">
<a href=https://github.com/olaleykhan/vitelens target="_blank">
<img src='/placeholder.jpg' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/olaleykhan/vitelens" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/olaleykhan/vitelens" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/olaleykhan/vitelens" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/olaleykhan/vitelens" alt="GitHub license" />
</p>

## 📌 Overview

vitelens is a monorepo project utilizing AWS SDK, React, Next.js, TypeScript, Jest, Cypress, and other essential dependencies for efficient development and testing.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .gitignore
├── README.Docker.md
|--- package.json
├── client
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── README.md
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── auth
│   │   │   └── page.tsx
│   │   ├── components
│   │   │   ├── BasefileUpload.tsx
│   │   │   ├── FullScreenBG.tsx
│   │   │   ├── GoHome.tsx
│   │   │   ├── ImageCard.tsx
│   │   │   ├── UploadImage.tsx
│   │   │   └── home
│   │   │       └── Home.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── hooks
│   │   │   ├── auth.ts
│   │   │   └── index.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services
│   │   │   ├── api
│   │   │   │   ├── auth.ts
│   │   │   │   ├── photos.ts
│   │   │   │   └── upload.ts
│   │   │   └── http
│   │   │       ├── constants.ts
│   │   │       ├── enums.ts
│   │   │       ├── http.ts
│   │   │       ├── index.ts
│   │   │       └── types.ts
│   │   ├── upload
│   │   │   └── page.tsx
│   │   └── utils
│   │       ├── AuthGuard.tsx
│   │       └── Tanstack.tsx
│   ├── cypress.config.ts
│   ├── cypress
│   │   ├── e2e
│   │   │   ├── app.cy.ts
│   │   │   └── page.cy.ts
│   │   ├── fixtures
│   │   │   └── example.json
│   │   └── support
│   │       ├── commands.ts
│   │       └── e2e.ts
│   ├── jest.config.ts
│   ├── next.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── next.svg
│   │   └── vercel.svg
│   ├── tsconfig.json
│   └── vitest.config.ts
├── compose.yaml
└── server
    ├── .dockerignore
    ├── .eslintrc.js
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── connectDB.ts
    │   ├── models
    │   │   ├── index.ts
    │   │   ├── photo
    │   │   │   ├── Photo.ts
    │   │   │   └── photo.model.ts
    │   │   ├── s3
    │   │   │   └── s3.model.ts
    │   │   ├── tag
    │   │   │   └── Tag.ts
    │   │   └── user
    │   │       └── User.ts
    │   ├── routes
    │   │   ├── auth
    │   │   │   └── auth.router.ts
    │   │   ├── photo
    │   │   │   ├── photo.controller.ts
    │   │   │   └── photo.router.ts
    │   │   ├── router.ts
    │   │   ├── s3
    │   │   │   ├── constants.ts
    │   │   │   ├── s3.controller.ts
    │   │   │   └── s3.router.ts
    │   │   └── users
    │   │       ├── users.controller.ts
    │   │       └── users.router.ts
    │   ├── server.ts
    │   ├── services
    │   │   └── auth
    │   │       ├── config.ts
    │   │       ├── passport-google-strategy.ts
    │   │       └── utils.ts
    │   └── utils
    │       ├── appError.ts
    │       └── catchAsync.ts
    ├── tsconfig.json
    └── types.d.ts
```

## 📝 Project Summary

- [**client/app**](client/app): Main application components and pages.
- [**client/app/services**](client/app/services): Services for API interaction and HTTP requests.
- [**client/cypress**](client/cypress): End-to-end testing setup and configurations.
- [**client/public**](client/public): Public assets and static files for the client.
- [**server/src**](server/src): Server-side source code for models, routes, services, and utils.

## 💻 Stack

- [aws-sdk/client-s3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-creating-buckets.html): AWS S3 client for server-client communication.
- [emotion/react](https://emotion.sh/docs/introduction): Styling library for creating React components.
- [mui/material](https://mui.com/getting-started/installation/): Material-UI for styling and components.
- [axios](https://axios-http.com/): Data fetching library for making HTTP requests.
- [react](https://reactjs.org/): JavaScript library for building UI components.
- [next](https://nextjs.org/): Framework for server-rendered React applications.
- [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): Testing utility for React components.
- [typescript](https://www.typescriptlang.org/): TypeScript for static typing and improved developer experience.

## ⚙️ Setting Up

#### Your Environment Variable

- Step 1

- Step 2

## 🚀 Run Locally
1.Clone the vitelens repository:
```sh
git clone https://github.com/olaleykhan/vitelens
```
2.Install the dependencies with one of the package managers listed below:
```bash
npm run install:app
```
3.Start the entire app in  development mode:
```bash
npm run dev
```
#### or you ca start client and server individually on separate shells
4.Start the client in  development mode:
```bash
cd client && npm run dev
```
5.Start the server in  development mode:
```bash
cd server && npm run dev
```

## 🙌 Contributors
<a href="https://github.com/olaleykhan/vitelens/graphs/contributors">
<img src="https://contrib.rocks/image?repo=olaleykhan/vitelens" />
</a>
