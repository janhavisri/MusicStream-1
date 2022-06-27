// 1. React Components are represented by Functions
// 2. Component names should start with Uppercase
// 3. There should be a top level return statement inside component
// 4. Components should be exported in order to import them anywhere.

//import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";
import "../stylesheets/login.css";

const Login = ({ username, age }) => {
  const url = app_config.backend_url;

  // 1. formobject

  const loginForm = {
    email: "",
    password: "",
  };

  // 2. submit function

  const loginSubmit = (values) => {
    fetch(url + "users/getbyemail/" + values.email)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);

        if (data.password == values.password) {
          console.log("login success");

          Swal.fire({
            icon: "success",
            title: "Login Success",
          });

          sessionStorage.setItem("user", JSON.stringify(data));
          window.location.replace("./library");

          return;
        }
      }

      Swal.fire({
        icon: "error",
        title: "Email or Password Incorrect",
      });
    });
};
 
  // 3. use Formik

  return (
  
    <div id="container">
    <div id="logo">
      <img
        id="google"
        src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
        alt=""
        border="0"
      />
    </div>
    <h3>Sign in</h3>
    <p>to continue to YouTube Music</p>
    <div id="input">
    <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
        <input  type="email" name="" id="email" placeholder=" " spellcheck="false"  onChange={handleChange}
                    value={values.email}/>
        <label for="">Email</label>
        <br/>
        <input type="password" placeholder=" " id="password" className="pass" onChange={handleChange}
                    value={values.password}/>
        <label for="">Password</label>
         <div id="showDiv">
         <input type="checkbox" id="showPassword_" />
          <label for="">Show Password</label>
      </div>
        <p>Not your computer? Use Guest mode to sign in privately.</p>
        <div id="signup">
        <a href="./signup" id="link_">Create Account</a>
        <button id="login">Next</button>
        
        </div>
        </form>
              )}
            </Formik>
    </div>
    </div>
    


  );
};

export default Login;
