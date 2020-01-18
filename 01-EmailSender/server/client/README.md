# Notes

- can nevigate to create-react-app repository https://github.com/facebook/create-react-app
- There are many FAQs, Updates, components, user guides
- install create-react-app as a global node modules, then we can create app using that

## concurrently 
- package that help to run server and client server both concurrently
~~~
	"server": "nodemon index.js",
	"client": "npm run start --prefix client",
	"dev": "concurrently \"npm run server\" \"npm run client\""
~~~

## proxy - only for dev
- there are issues in client when it use realtive link like '/auth/google'. It tries to load this url with front end react server but it needs to resolve with backend server
- we can put proxy in client package.json to use that relative link
- need to install ```npm install http-proxy-middleware ``` for proxy object
~~~
  "proxy":{
    "/auth/google":{
      "target":"http://localhost:5000"
    }
  },
~~~
- we can remove this from package.json and put it insetUpProxy.js
- ``` important``` there are no issues in production env, there are no two servers, only one backend server is there.

## Redux
- use to control data in client app (index.js)
- react use to conroll rendering in client app (App.js)
- provider comes from react-redux lib and it help to glue both
- provider tag make other to communicate with root and store
- can see comments on code


## naming
- if given class exporting class, component then name it starting Capital letter
- if given class exporting functions then name it starting lowercase letter

## webpack 
- create single js file by combining all in project
- webpack identify import 'materialize-css/dist/css/materialize.min.css'; as a not a js file and treat different

## redux-thunk middleware
- give access to dispatch actions directly without returning actions by access creator
- need to return function from action and thunk will call that function
- react-redux connect function will provide ability to call action creators

~~~
export default connect(null, actions)(App);
~~~

## react-router-dom
- Link in this module can use to nevigate in side react component. 
- if we use <a> it will fully load page.


### JS
- '' empty string consider as false

### lodash
-  we can use loadsh to map array of element and do the things we want

~~~
_.map(FIELDS, ({ label, name }) => {
			return <Field key={name} component={SurevyTextField} type="text" label={label} name={name} />;
		});
~~~


# Default react-app read me 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
