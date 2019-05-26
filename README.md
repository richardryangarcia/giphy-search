# giphy-search
React client for viewing, search and saving your favorite gifs. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Accounts required for this project
1.) Firebase authentication - To store user passwords and manage session data https://firebase.google.com/docs/auth/web/start

# Project set up 
First you will need to add a `.env` file to your project's root directory. The file should contain the following environment variables: <br/>
 
 ```sh
NODE_PATH=src
```
*NOTE: Support for this way of enabling absolute paths will be deprecated and should be set up in a jsconfig.json file 

Also, create a `.env.development.local` file in your projects root directory to declare the following environment variables:
 ```sh
REACT_APP_FIREBASE_API_KEY=[YOUR FIREBASE API KEY]
REACT_APP_FIREBASE_AUTH_DOMAIN=[YOUR FIREBASE AUTH DOMAIN]
REACT_APP_FIREBASE_DATABASE_URL=[YOUR FIREBASE DATABASE URL]
REACT_APP_FIREBASE_PROJECT_ID=[YOUR FIREBASE PROJECT ID]
REACT_APP_FIREBASE_STORAGE_BUCKET=[YOUR FIREBASE STORAGE BUCKET]
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=[YOUR FIREBASE SENDER ID]
REACT_APP_FIREBASE_APP_ID=[YOUR FIREBASE APP ID]
REACT_APP_AXIOS_BASE_URL=[YOUR SERVERS BASE URL]
REACT_APP_LOCAL_STORAGE_KEY=[YOUR LOCAL STORAGE ITEM NAME FOR STORING AUTH TOKEN]
```

Lastly, run <br/>
 ```sh
npm install
```


# Starting the project

In the project directory, you can run:
 ```sh
npm start
```
