import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import DiscordHome from "./projects/Discord app/DiscordHome";
import { login, selectUser, logout } from "./features/counter/userSlice";
import Login from "./commonPages/Login";
import { auth } from "./firebase";
import TravelHome from "./projects/travel-advisor/TravelHome";
import AuthProvider from "./contexts/AuthContext";
import SignUp from "./commonPages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignupTemplet from "./commonPages/LoginSignupTemplet";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/discord" component={DiscordHome}></Route>
            <Route exact path="/login" component={Login} />
            <Route path="/signUp" component={SignUp}></Route>
            <Route exact path="/" component={LoginSignupTemplet} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
