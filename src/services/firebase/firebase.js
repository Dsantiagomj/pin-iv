import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  /* AUTH API - AUTH WITH EMAIL & PASSWORD */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  /* AUTH API - AUTH WITH GOOGLE */
  doSignInWithGoogle = (setToken, setUser, history) => {
    this.auth.signInWithPopup(this.googleProvider).then((response) => {
      const userData = JSON.stringify(response);
      setToken(userData);
      setUser(userData);
      if (history) history.replace("/");
    });
  };

  /* AUTH API - AUTH WITH FACEBOOK */
  doSignInWithFacebook = (setToken, setUser, history) => {
    this.auth.signInWithPopup(this.facebookProvider).then((response) => {
      const userData = JSON.stringify(response);
      setToken(userData);
      setUser(userData);
      if (history) history.replace("/");
    });
  };
}

export default Firebase;
