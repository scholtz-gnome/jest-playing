# Jest Playing

This codebase provides a minimally configured JS testing environment. It uses ESModules for imports and exports.

# Setup

Make sure you're running Node `v16.18.0`. If you use nvm, run `nvm use` to use the version specified in `.nvmrc`.

Run `npm ci` to install dev dependencies.

# Scripts

## `npm run test`

Runs tests once.

## `npm run test:watch`

Runs tests in watch mode and reruns them on file save.

## `npm run test:cov`

Runs tests and creates a coverage report.

## `npm run start`

Runs `node src/index.js`

## `npm run start:dev`

Runs `nodemon src/index.js` to rerun your code on file save.
