# Your Football Team - Proof of concept

"Your Football Team” is going to be a web application where a user can create their own football team.

For that, the user needs a way to display the selected players from the different national teams, assign them to the team, and to save the team.

## Deployed App
I used the free hosting and deployment site https://surge.sh/ for the temporary deployment of the app.

## Screenshots

![Screenshots](/screenshots/screenshots.png?raw=true)

## Author notes
I used a mobile first approach for the design.

That means that in some bigger desktop resolutions the design may look streched. It's still fully functional but in the future the app may
require a full redisign for desktop.

I listed all the dependencies and libraries that I used below.

The scripts configured in package.json may be used with npm or yarn.

## Dependencies
* react
* react-dom
* react-lazyload
* react-redux
* react-reveal
* react-router-dom
* react-scripts
* reactjs-popup
* redux
* redux-toolkit
* redux-persist
* sass
* web-vitals
* font-awesome-react
* jest-dom
* react testing library
* Mock Service Worker

## Testing
To run the various test is necesary to execute the script `yarn test` or `npm test`, as defined in package.json.

For testing, I mainly used Jest as a base, React Testing Library for the correct render and interaction of the componentes, and Mock Service Worker for introduce mock api calls while fetching.

All the tests files are stored in the `tests` folder.

For lack of time I didn't implement all the test that I've wanted, but there are some important test in place regarding Redux reducers and correct render and behaviour of the application DOM.

## Functional requirements:

### Rules for football teams:
* Players are selected from national teams.
* Maximum of 4 players from the same team.
* Team size limit to 16 players.

### Each team must have one coach, and at least:
* 4 defenders.
* 4 midfielders.
* 2 attackers.
* 2 goalkeepers.

## Available Scripts

In the project directory, you can run:

### `npm / yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm / yarn test`

Launches the test runner in the interactive watch mode.\

### `npm / yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm / yarn sass`
Compiles all sass stylesheet into index.css automatically and keeps watching for future changes

### `surge`
For automatic deployment of the App I've choosen surge.sh for the simplicity and ease of use.

It will require that the user input a domain and a username and password however.
