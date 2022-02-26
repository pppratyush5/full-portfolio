import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import DiscordHome from "./projects/Discord app/DiscordHome";
import { login, selectUser, logout } from "./features/counter/userSlice";
import Login from "./commonPages/Login";
import { auth } from "./firebase";
import TravelHome from "./projects/travel-advisor/TravelHome";
// import AuthProvider from "./contexts/AuthContext";
import SignUp from "./commonPages/SignUp";
import { BrowserRouter as Router,Switch, Routes, Route } from "react-router-dom";
import LoginSignupTemplet from "./commonPages/LoginSignupTemplet";
import Test from "./Test/Test";
import  Header from "./projects/Redux/Components/Header"
import ProductListing from "./projects/Redux/Components/ProductListings";
import ProductDetail from "./projects/Redux/Components/ProductDetail";
import InfiniteScroll from "./projects/InfiniteScroll/InfiniteScroll";
import InfiScroll from "./projects/InfiniteScroll/InfiniteScroll";
import LiquideLife from "./projects/LiquideLife/LiquideLife";
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
        {/* <AuthProvider> */}
        {/* <Header></Header> */}
          <Routes>
            <Route path="infi" element={<InfiScroll/>} ></Route>
            <Route path="l" element={<LiquideLife/>} ></Route>
            <Route path="/plist" exact element={<ProductListing/>}></Route>
            {/* <Route path="/product/:productId" exact element={<ProductDetail/>}></Route> */}
            {/* <Route>404 Not Found !!!</Route> */}
            <Route path="/discord" element={<DiscordHome/>}></Route>
            <Route exact path="/login" element={<Login/>} />
            <Route path="/signUp" element={<SignUp/>}></Route>
            <Route exact path="/test" element={<Test/>} />
            <Route exact path="/" element={<LoginSignupTemplet/>} />
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
