import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxSZilVOAB6YnyUTDfyZAGDMiP8XfBS54",
  authDomain: "drug-wars-remake.firebaseapp.com",
  databaseURL: "https://drug-wars-remake.firebaseio.com",
  projectId: "drug-wars-remake",
  storageBucket: "drug-wars-remake.appspot.com",
  messagingSenderId: "36237492471",
  appId: "1:36237492471:web:53d644a3ffa562ae3353f2",
  measurementId: "G-LBRWSPJH0R",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
