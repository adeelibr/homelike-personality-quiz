### Running The Application

I am using `yarn` for this, but you can use `npm` if you want.

```
 yarn
 yarn build
```

This command will run a production build make all the optimization and minification it needs. And
open up the portal on `http://localhost:3000/`

If you want to edit this application on the go, using hot module replacment, run the following
command

```
yarn start
```

Cool things you will hopefully like;
* Using Airbnb Javascript style guide
* You can not make a commit unless your code is properly linted, thanks to a tool called Husky ;)
* Using Material UI (I love material-ui, I also a contributor to react material ui)

### Time it took to build

It took me <b>4 hours</b> to build this application.

<hr />
<br /><br /><br />

# Documentation

Webapp Was Built In:

 * ReactJS
 * Redux
 * Webpack 4 
 * Babel 7
 * React Material UI
 * Bootstrap 4 
 * SCSS Support
 * HMR
 * Code Splitting with <b>React.lazy</b> & <b>React.Suspense</b>
 * Code Formatter (Prettier)
 * Eslint configured extended with Airbnb style guide & support for prettier
 * Jest & Enzyme Configured
 * Automatically lint & format code, when committing it. [Husky/Lint-Staged]


### Tutorials

Things I did while setting up the boiler plate for this code base, I wrote it all down in a series of articles

* <del>https://medium.freecodecamp.org/how-to-conquer-webpack-4-and-build-a-sweet-react-app-236d721e6745</del>
* https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff
* https://medium.freecodecamp.org/these-tools-will-help-you-write-clean-code-da4b5401f68e
* How I set up Jest/Enzyme <b>[Coming Soon]</b>


### Deploying a Node Instance On Linux Server Using PM2

 How to start on PM2 [This is specific if you serve your files on a linux server where a NodeJS application is deployed as a server serving the .js files

```
 npm i
 node_modules/.bin/webpack --config webpack.prod.config.js --colors --progress
 node server
 PORT=8082 pm2 start server --name "app-name-to-deploy"
```