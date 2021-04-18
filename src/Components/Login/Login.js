import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 text-center m-auto">
          <div className="loginBox">
            <h2>LOGIN</h2> <br />
            <Button onClick={googleLogin}>
              <FcGoogle /> Login With Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
