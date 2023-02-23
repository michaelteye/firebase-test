importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyA1K9hxodjQ3PVBPGhZS4TEgk6EhAx6UpU",
    authDomain: "push-notification-c602f.firebaseapp.com",
    projectId: "push-notification-c602f",
    storageBucket: "push-notification-c602f.appspot.com",
    messagingSenderId: "715377064493",
    appId: "1:715377064493:web:9bb3c98b186104723f56a4",
    measurementId: "G-LZ748K6EH5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});




// const firebaseConfig = {
//     apiKey: "AIzaSyA1K9hxodjQ3PVBPGhZS4TEgk6EhAx6UpU",
//     authDomain: "push-notification-c602f.firebaseapp.com",
//     projectId: "push-notification-c602f",
//     storageBucket: "push-notification-c602f.appspot.com",
//     messagingSenderId: "715377064493",
//     appId: "1:715377064493:web:9bb3c98b186104723f56a4",
//     measurementId: "G-LZ748K6EH5"
//   };