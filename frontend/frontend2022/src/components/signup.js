import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import app_config from "../config";
import "../stylesheets/signup.css"

const Signup = () => {
  const url = app_config.backend_url;

  // 1. create an object to initialize formik
  const userForm = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  //   2. create a callback function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Method
    // 3. Data
    // 4. Data format

    // to request on backend
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //
  };

  const uploadFile = (e) => {
    // extracting file from input
    const file = e.target.files[0];

    // create formdata
    const fd = new FormData();
    fd.append("file", file);

    // request for uploading file
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
    });
  };

  //   3. add formik in jsx
  return (
    <div id="container_">
    <div id="logo_">
      <img id="google_"
        src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
        alt="" border="0" />
    </div>
    <h3>Create your Google Account</h3>
    <p>to continue to YouTube</p>
    <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
    <div id="name_">
    
      <input type="text" id="firstname" placeholder=" " spellcheck="false"onChange={handleChange}
                value={values.firstname} required />
      <label for="">First name</label>
      <input type="text" id="lastname" placeholder=" " spellcheck="false"onChange={handleChange}
                value={values.lastname} required />
      <label for="">Last name</label>
    </div>
    <div>
      <input type="email" id="email" placeholder=" " spellcheck="false"  onChange={handleChange}
                value={values.email} required />
      <label for="">Email</label>
      <p>You'll need to confirm that this email belongs to you.</p>
    </div>
    <div id="password">
      <input type="password" id="pass" placeholder=" " onChange={handleChange}
                value={values.password}required />
      <label for="">Password</label>
      <input type="password" name="" id="confirm" placeholder=" " onChange={handleChange}
                value={values.confirmpassword} required />
      <label for="">Confirm</label>
      <p>
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </p>
      <br />
      <input type="checkbox" id="showPassword" />Show password
    </div>
    <div id="foot_">
      <a href="./login" id="link">Sign in instead</a>
      <button id="register_">Next</button>
    
    </div>
    </form>
      )}
    </Formik>
  </div>
  );
};

export default Signup;
