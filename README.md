This project is a basic React app where you create a type of card which contains title,image,description and some extra details about that particular topic.
You can Create and delete as many cards you want.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Some technologies/packages i have used in this project are:

React Js-as Frontend javascript library,
Tailwind css- for styling,
Formik and Yup- for form fields creation and validation,
Redux- to manage state globaly,
react-toastify,react-icons,slick-carousel etc.


Info about my Components-
Nav.js- Simple navbar
Swap.js- this component contains [Create new] and [My flashcard] button to swap between pages
MainForm.js- This is the 1st page to create new flashcards.
FlashGrid.js- this is the 2nd page to show existing flashcards grid layout
FlashDetails.js this is the last page to show details of any particular flashcard you choose

About Mainform component -This component basicaly contains two forms.In the first form You can provide Title,Image(optional) and Description to the card.
In second form you can provide Terms,definations,Images(optional) related to the topic.After filling all the fields you can submit this form and a new flashcard will be generated which you can see by clicking on My flashcard button.

About FlashGrid component-This components will contains all the flashcards you create in form of grid.Every grid item will have title,description,number of terms and View card button.On click of the view card button of you can see the details of any card.Also there is a Delete all button,which will delete all the flashcards.You can also delete any single flashcard if you want. 

About FlashDetails component -This component contains all the details of the flashcard with all terms,definations etc.In the top you will see the title and description of the card .In the left side you will see all the terms as list,in the middle you will see the img and defination of the selected term and in the right side, there are three button except share button download and print button was optionals for our project so i implimented only share button.Onclick of this button, a popup Modal will open where you can copy the link and share it anywhere you want.

I have also implemented some responsiveness on this project,so you can also use this website in mobile or tablet.

This was the first finalized project of my life.So i hope you will like it.
Thnak you for visiting.



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
