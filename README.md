# Bag Of Holding

A magical grab bag of useful tools for the discerning developer.

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) ![Unit Tests](https://github.com/PenguinOfWar/bagofholding/workflows/Unit%20Tests/badge.svg) ![GitHub Pages](https://github.com/PenguinOfWar/bagofholding/workflows/GitHub%20Pages/badge.svg)

## Why?

I hate repeating myself and common chunks of legacy code can be risky business down the line.

This repo probably isn't for you if you've found your way here randomly, but if any of the scripts or libraries here are useful to you a star is always appreciated.

## Credit

While a lot of this code is written by me or so generic as to be example code, I try to give credits where possible in the source of each individual package if I have knowingly used code from somebody else.

If you notice a missing credit, please create an issue or a PR.

## Security

This monorepo manages multiple individual micro packages using Lerna. These micro packages are designed to be simple enough to fit on one screen of code. No compilation or mutation is provided to the source code before the package is deployed so what you see is what you get.

Each micro package strives to be free of any other dependencies. Any package with a dependency will specifically mention the direct dependecies on the individual package readmes.

Dependencies will also be listed in this document and on the GitHub page.

The end user is responsible for necessary polyfills or bundler/loader dependencies.

## Current Dependencies

### None

## Demos & Examples

[Click here for demos and examples](https://penguinofwar.github.io/bagofholding/)

## Support

Please create an issue in the [issue tracker](https://github.com/PenguinOfWar/bagofholding) if you have a problem or need support. Please select the correct label when creating your issue (e.g. `help wanted` or `bug`).

## Contributing

Contributions are welcome. Note that code style is enforced with `prettier`. Kindly adhere to this while making contributions.

### Step 1: Fork this repo

### Step 2: Start hacking

### Step 3: [Open a PR](https://github.com/PenguinOfWar/bagofholding/pulls)

### Step 4: Profit 💰💰💰

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## License

MIT License
