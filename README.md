Live Deploy Link:- https://a6dubeycosmo.netlify.app/


    In this React app, users can add more fields by clicking the “Add Field”
    icon, delete any field, define a type like `string`, `number` etc.
    These are the types you should handle. 
        1. String
        2. Number 
        3. Boolean 
        4. Object 
    If the type is Object, it can have nested rows as well.
# Features
    1. Seperate Components to handle inputs.
    2. User are able to edit name of a field
    3. User are able to add more fields
    4. User are able to delete a field
    5. Users are able to add nested fields to object type.
    6. There is a save button which console the updated data.




 In this app I have breakdown the problem in 3 components.
 
 Component 1: Field.js :-
    In this component we return an Input feild for form name and another Input for selecting type of the Form data.
    It also have Delete buttton in it to Delete the entire form data in which Index it was clicked.
    If we select form type ast the object then the ObjectField component will be rendered.
    We can edit and handle the chanegs in the form data.

 Component 2: ObjectField.js :-
    This component will return a new subfields if in the parent Field we select type as object.
    We can edit and delete the subfeilds and Parent field too.
    We can add nested fields in objects and well and it can have multiple chains of nested fields inside it with different data type.

Component 3: App.js :-
    This component is the final component which will get return values of Field and ObjectField component form data. And this form data will be     displayed to the Client.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
