# Sample Contacts Management with Create React App

![CI/CD](https://github.com/m-davoodi/contacts-management/workflows/CI/CD/badge.svg)
![License](https://img.shields.io/github/license/m-davoodi/contacts-management)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Checkout [online demo](https://m-davoodi.github.io/contacts-management/)

## Quick Start

- install all dependency using `yarn install` command.
- start development sever using `yarn start`. then open [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Building Project

Builds the project with **docker**

- run `docker build -t contacts-management .` to create docker image

- run ` docker run --name contacts-management --rm -p 5000:80 contacts-management` to create a container

Now open the browser and go to [http://localhost:5000](http://localhost:5000)
