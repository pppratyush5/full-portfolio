import { auth, provider } from "../firebase";
import "./SignUp.css";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError("Fail to create account");
    }
    setLoading(false);
  }

  const signIn = () => {
    // do google signUp
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="signUp">
      {/* <div className="signUp__container"> */}
      {/* <div className="signUp__left__container">
          <div className="signUp__welcome__text">
            <h4 className="welcome__text1">Hi, I am Pratyush.</h4>
            <h4 className="welcome__text2">Welcome to my portfolio.</h4>
            <h4 className="welcome__text3">Please signUp with Google.</h4>
            <h4 className="welcome__text4">Thanks for visiting</h4>
          </div>
        </div> */}
      {/* <div className="signUp__right__container"> */}
      <form onSubmit={handleSubmit}>
        {/* <h2 className="signUp__text">Sign Up</h2> */}
        {/* {currentUser.email} */}
        {error && alert(error)}
        {/* <div className="signUp__logo">
            <img src="" alt="" />
          </div> */}
        <p className="margin-t-b-5">Email address</p>
        <input
          className="margin-t-b-5"
          type="Email"
          id="email"
          placeholder="Email address"
          ref={emailRef}
        />
        <p className="margin-t-b-5">Password</p>
        <input
          className="margin-t-b-5"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="margin-t-b-5">Comfirm your password</div>
        <input
          className="margin-t-b-5"
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
        />
        <button className="margin-t-b-5" disabled={loading}>
          Sign Up
        </button>
      </form>
      {/* <div className="other__signUp__option">
            Already have a account? <Link to="/login">Login</Link>
          </div> */}
      {/* </div> */}
    </div>
    // </div>
  );
};

export default SignUp;
