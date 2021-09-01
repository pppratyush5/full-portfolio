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
          Hi, I am Pratyush.
          <br /> Welcome to my portfolio.
          <br />
          Please Login with Google.
          <br />
          Thanks for visiting
        </div>
        <div className="login__right__container">
          <h2>you need to login</h2>
          <div className="login__logo">
            <img src="" alt="" />
          </div>
          <button onClick={signIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
