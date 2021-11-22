import { auth, provider } from "../firebase";
import "./Login.css";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      let res = await login(emailRef.current.value, passwordRef.current.value);
      history.push("/discord");
    } catch (e) {
      setError("Fail to create account");
    }
    setLoading(false);
  }

  // const signIn = () => {
  //   // do google login
  //   auth
  //     .signInWithPopup(provider)
  //     .then(() => {
  //       history.push("/discord");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left__container">
          {/* <div className="login__welcome__text">
            <h4 className="welcome__text1">Hi, I am Pratyush.</h4>
            <h4 className="welcome__text2">Welcome to my portfolio.</h4>
            <h4 className="welcome__text3">Please Login with Google.</h4>
            <h4 className="welcome__text4">Thanks for visiting</h4>
          </div> */}
        </div>
        <div className="login__right__container">
          <form onSubmit={handleSubmit}>
            {/* <h2 className="login__text">Login</h2> */}
            {/* {currentUser.email} */}
            {error && alert(error)}
            {/* <div className="login__logo">
            <img src="" alt="" />
          </div> */}
            <p className="margin-t-b-5">Email address</p>
            <input
              className="margin-t-b-5"
              type="Email"
              placeholder="Email"
              ref={emailRef}
            />
            <p className="margin-t-b-5">Password</p>
            <input
              className="margin-t-b-5"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="margin-t-b-5" disabled={loading}>
              Login{" "}
            </button>
          </form>

          {/* <div className="other__login__option">
            <h5>Other Options</h5>
            <button onClick={signIn}>Sign in with google</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
