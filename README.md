project 1
----- Discord -----
google authentication, redux, react, firebase, presistance

---------------firebase basic setup---------------

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.9.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.9.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.Sign in to Google

firebase login

Initiate your project
Run this command from your app's root directory:

firebase init

When you're ready, deploy your web app
Put your static files (e.g. HTML, CSS, JS) in your app’s deploy directory (the default is 'public'). Then, run this command from your app’s root directory:

firebase deploy

-------------firebase config-------------

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAcDrd2V1qxlXdLZQV5KupSfpW4juFRsuY",
authDomain: "full-portfolio.firebaseapp.com",
projectId: "full-portfolio",
storageBucket: "full-portfolio.appspot.com",
messagingSenderId: "767997345460",
appId: "1:767997345460:web:264b0427af6adcdf9f21e1",
measurementId: "G-ENC6TM4YLM"
};

---------------firebase basic setup---------------
