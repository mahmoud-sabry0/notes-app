import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userToken")){
     
      // debugger
      navigate("/login");
    }
  }, []);
  return children;
}
