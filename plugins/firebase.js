// /plugins/firebase.js

import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/database'

var config = {
    apiKey: "AIzaSyDdO0AGzFoL-AV1HS7Krl7FdZ3-r8yEriY",
    authDomain: "portal-engine-2019.firebaseapp.com",
    databaseURL: "https://portal-engine-2019.firebaseio.com",
    projectId: "portal-engine-2019",
    storageBucket: "portal-engine-2019.appspot.com",
    messagingSenderId: "146466591184",
    appId: "1:146466591184:web:a5ca1850d2922631aa29d5"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
// export const auth = firebase.auth()
// export const DB = firebase.database()
// export const StoreDB = firebase.firestore()
export default firebase

