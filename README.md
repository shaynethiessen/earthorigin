# Earth Origin

## Available Scripts

### `yarn start:server`

Runs the server in the development mode on port 3001.

The server will reload if you make edits.

### `yarn start:web`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `yarn build:%package%`

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn fix:lint:%package%`

Attempts to automatically fix all linting issues.

### `yarn organize`
Updates debug namespaces, sorts project imports, renames alias imports 

### `yarn test:dependencies:%package%`
Runs depcheck to find missing/unused dependencies.

### `yarn test:lint:%package%`

Runs lint to ensure all lint rules are passed.

### `yarn test:types:%package%`

Runs typescript to ensure we don't have any undefined or mismatched types.
