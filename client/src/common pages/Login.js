import { auth, provider } from "../firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    // do google login
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left__container">
          <div className="login__welcome__text">
            <h4 className="welcome__text1">Hi, I am Pratyush.</h4>
            <h4 className="welcome__text2">Welcome to my portfolio.</h4>
            <h4 className="welcome__text3">Please Login with Google.</h4>
            <h4 className="welcome__text4">Thanks for visiting</h4>
          </div>
        </div>
        <div className="login__right__container">
          <h2 className="login__text">Please login with Google</h2>
          {/* <div className="login__logo">
            <img src="" alt="" />
          </div> */}
          <button onClick={signIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
