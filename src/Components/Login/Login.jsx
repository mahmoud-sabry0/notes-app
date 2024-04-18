import React, { useState } from "react";
import img from "../../imges/Paper-notes.svg.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let [signInMsg, setSignInMsg] = useState();
  let [signInFailedMsg, setSignInFailedMsg] = useState();
  let navigate = useNavigate();

  let validationSchema = yup.object({
    email: yup
      .string()
      .email("Please Enter Valid Email")
      .required("name is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "at least uppercase ,lowercase one digit,special char allowed"
      )
      .required("password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: signIn,
  });
  function signIn(values) {
    console.log(values);
    axios
      .post("https://note-sigma-black.vercel.app/api/v1/users/signIn", values)
      .then((res) => {
        console.log(res);
        setSignInMsg(res.data.msg);

        localStorage.setItem("userToken", res.data.token);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
        setSignInFailedMsg(err.response.data.msg);
      });
  }
  function clearMsgs() {
    setSignInMsg("");
    setSignInFailedMsg("");
  }
  return (
    <>
      <div>Register</div>

      <li className="fixed-top p-3 lg-flex d-none">
        <i className="fe-regular fa-note-sticky text-info fs-2"></i>
        <p className="ps-2 fs-4 fw-bold">Notes</p>
      </li>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <img className="w-75 pt-5" height={400} src={img} alt="" />
          </div>

          <div className="col-lg-7">
            <div className="min-vh-100 d-flex justify-content-center align-items-center signup-container">
              <div className="bg-light bg-opacity-25 shadow w-100 mx-auto p-5 rounded-2">
                <h1 className="fw-bold">Sign Up Now</h1>
                <div className="pt-3">
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      onFocus={clearMsgs}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="form-control my-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    {formik.touched.email ? <p>{formik.errors.email}</p> : ""}
                    <input
                      onFocus={clearMsgs}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="form-control my-2"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    {formik.touched.password ? (
                      <p>{formik.errors.password}</p>
                    ) : (
                      ""
                    )}

                    <button
                      type="submit"
                      className="btn btn-info text-light w-100 rounded-2 mt-2"
                    >
                      Sign In
                    </button>
                   
                    {signInMsg ? (
                      <p className="text-center">{signInMsg}</p>
                    ) : null}
                    {signInFailedMsg ? (
                      <p className="text-center">{signInFailedMsg}</p>
                    ) : null}
                  </form>
                  <p className="text-center pt-3">
                    Don't Have Account ? Register
                  </p>
                </div>
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
