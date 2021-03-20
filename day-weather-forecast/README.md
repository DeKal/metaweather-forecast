# Weather forecast
## Prerequisite
- Prefer Node >= v12.

- Install dependencies
`yarn`

- VScode (strongly recommend)

- VSCode Plugin: Prettier + Eslint

## Installation 
To install, using:
```
yarn install
```

## Development
### Starting
To start, using:
```
yarn start
```

### Testing
To run test, using:
```
yarn test
```
To run test and snapshot fix , using:
```
yarn test -u
```

### Linting
We are using these standards: `airbnb + prettier + react`
To run code linting, using:
```
yarn lint
```
To run auto fix (only fix some of the errors)
```
yarn lint --fix
```

### Start storybook
```
yarn storybook
```

## Production
### Build code in production
```
yarn build
```

### Serve production code
```
yarn serve
```

## Project Structure
We will separate our structure into:
- `core`: all shared components
- `modules`: detail for each module
- `state`: state management

<pre>
<b>src</b>
 ┣ <b>core</b>                // Contains all shared components, styles, and helpers, ...
 ┃ ┣ constants
 ┃ ┣ containers
 ┃ ┣ components 
 ┃ ┣ helpers
 ┃ ┣ styles
 ┃ ┗ ...
 ┣ <b>modules</b>             // Contains all components, assets, and pages, ... for one module
 ┃ ┣ assets
 ┃ ┣ constants
 ┃ ┣ containers
 ┃ ┣ components
 ┃ ┣ pages
 ┃ ┗ ...
 ┣ <b>state</b>               // Contains all states of our application
 ┃ ┣ <b>core</b>              // Core logics of Redux
 ┃ ┃ ┣ rootReducers.js
 ┃ ┃ ┗ store.js
 ┃ ┗ <b>model states</b>     // State for model, contains actions, reducers, selectors and apis
 ┃ ┃ ┣ actions.js
 ┃ ┃ ┣ thunks.js
 ┃ ┃ ┣ reducers.js
 ┃ ┃ ┗ selectors.js
 ┣ App.js
 ┣ index.js
</pre>



