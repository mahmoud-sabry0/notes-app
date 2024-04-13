import React, { useState } from "react";
import img from "../../imges/Paper-notes.svg.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let [signUpMsg, setSignUpMsg] = useState();
  let [signUpFailedMsg, setSignUpFailedMsg] = useState();
  let navigate = useNavigate();

  let validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Minimun 3 chars")
      .max(40, "Maximum 40 required")
      .required("name is required"),
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
    age: yup
      .number()
      .min(16, "Enta Under Age")
      .max(50, "ro7 et7aseb")
      .required("age is required"),
    phone: yup
      .string()
      .matches(/^(\+?)([0-9]){1,15}$/, "Please Enter Egyption Number")
      .required("Phone is require"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema,
    onSubmit: signUp,
  });
  function signUp(values) {
    console.log(values);
    axios.post('https://note-sigma-black.vercel.app/api/v1/users/signUp', values)
      .then((res) => {
        console.log(res);
        setSignUpMsg(res.data.msg);
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
        setSignUpFailedMsg(err.response.data.msg);
      });
  }
  function clearMsgs() {
    setSignUpMsg("");
    setSignUpFailedMsg("");
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
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                    {formik.touched.name ? <p>{formik.errors.name}</p> : ""}
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
                    <input
                      onFocus={clearMsgs}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="form-control my-2"
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Enter Your Age"
                    />
                    {formik.touched.age ? <p>{formik.errors.age}</p> : ""}
                    <input
                      onFocus={clearMsgs}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className="form-control my-2"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter Your Phone"
                    />
                    {formik.touched.phone ? <p>{formik.errors.phone}</p> : ""}
                    <button
                      type="submit"
                      className="btn btn-info text-light w-100 rounded-2 mt-2"
                    >
                      Sign Up
                    </button>
                   

                    {signUpMsg ? <p>{signUpMsg}</p> : null}
                    {signUpFailedMsg ? <p>{signUpFailedMsg}</p> : null}
                  </form>
                  <p className="text-center pt-3">
                    Already Have Account ? Login
                  </p>
                </div>
                <button
                    onClick={() => navigate("/Login")}
                      type="submit"
                      className="btn btn-info text-light w-100 rounded-2 mt-2"
                    >
                     Login
                    </button>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
