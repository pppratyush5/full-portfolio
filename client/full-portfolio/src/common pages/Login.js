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
      <h2>you need to login</h2>
      <div className="login__logo">
        <img src="" alt="" />
      </div>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};

export default Login;
