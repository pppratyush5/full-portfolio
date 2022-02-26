import "./LoginSignupTemplet.css";
import img from "../assets/add_circle_white.svg";
import SignUp from "./SignUp";
import googleLogo from "../assets/googleLogo.png";
import fbLogo from "../assets/fbLogo.png";
import Login from "./Login";
import { useState } from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";

const LoginSignupTemplet = () => {
  const [loadLogin, setLoadLogin] = useState(false);
  const history = useNavigate();

  const switchForm = () => {
    setLoadLogin(!loadLogin);
  };

  const signIn = () => {
    // do google login
    auth
      .signInWithPopup(provider)
      .then(() => {
        history.push("/discord");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <img src={img} width="200px" alt="" />
      </div>
      <div className="rightContainer">
        <div className="rightMainContainer">
          <div className="firstPart">
            <h1 className="margin-t-b-5">Get's Started.</h1>
            <h5 className="margin-t-b-5">
              {loadLogin ? (
                <span>
                  Already have an account? &nbsp;
                  <span className="loginText" onClick={switchForm}>
                    Log in
                  </span>
                </span>
              ) : (
                <span>
                  Need an account? &nbsp;
                  <span className="loginText" onClick={switchForm}>
                    Create Account
                  </span>
                </span>
              )}
            </h5>
            <button
              onClick={signIn}
              className="googleButton margin-t-b-5  displayFlexJustifyAlignCenter"
            >
              <img
                className="padding-l-r-10"
                src={googleLogo}
                alt=""
                width="17px"
              />
              <span>Sign up with Google</span>
            </button>
            <button className="fbButton margin-t-b-5 displayFlexJustifyAlignCenter">
              <img className="fbLogo" src={fbLogo} alt="" width="17px" />
              <span className="padding-l-r-10">Sign up with Facebook</span>
            </button>
            <div className="or margin-t-b-5">or</div>
          </div>
          {loadLogin ? <SignUp></SignUp> : <Login></Login>}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupTemplet;
