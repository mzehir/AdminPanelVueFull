import firebase from 'firebase';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRZbXmXrDEsV47Y3Qti0HoeKJqjXiWFSM",
    authDomain: "adminpanelvue-6fa7c.firebaseapp.com",
    databaseURL: "https://adminpanelvue-6fa7c.firebaseio.com",
    projectId: "adminpanelvue-6fa7c",
    storageBucket: "adminpanelvue-6fa7c.appspot.com",
    messagingSenderId: "843266588273",
    appId: "1:843266588273:web:95e93fcec873339513e5d0"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth();
        this.db = firebase.firestore();

        this.storage = firebase.storage()
        this.storageRef = this.storage.ref()
    }
}

export default new Firebase()