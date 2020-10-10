import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClHzIzL-f3m7C2MymoY9hhAAx1o5ROdaE",
  authDomain: "vendor-wars.firebaseapp.com",
  databaseURL: "https://vendor-wars.firebaseio.com",
  projectId: "vendor-wars",
  storageBucket: "vendor-wars.appspot.com",
  messagingSenderId: "381015888049",
  appId: "1:381015888049:web:774bdb1795f57e97af9290",
  measurementId: "G-WVCS6H3GXS"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    firebase.analytics();
  }
}

export default Firebase;
