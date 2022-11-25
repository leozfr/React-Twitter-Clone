//import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/loginSlice";
import { auth, provider } from "../../Firebase/Firebase";
import img from "../../img/googl.png";
/* eslint-disable */
function Login() {
  const dispatch = useDispatch();
  //const [user, setUser] = useState([]);

  const handleAuth = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((data) =>
      dispatch(
        login({
          name: data?.user.displayName,
          email: data?.user.email,
          loggedIn: true,
          username: data?.user.displayName,
          avatar: data?.user.photoURL,
          uid: data?.user.uid,
        })
      )
    );
  };

  return (
    <>
        <div className="login-box">
            <img style={{
                display: "flex",
                width: 128,
                height: 128,
                marginLeft: 'auto',
                marginRight: 'auto'
            }} src={img} alt="google logo" onClick={(e) => handleAuth(e)} />

            <form>
                <a href="#" onClick={(e) => handleAuth(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sign With Google
                </a>
            </form>
        </div>
    </>
  );
}

export default Login;
