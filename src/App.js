import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Layout from './Components/Layout/Layout'
import { RecoilRoot } from 'recoil'
import InverseProtectedRoute from './Components/TnverseProtectedRoute/InverseProtectedRoute'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'


export default function App() {

  let routes= createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
    {index:true,element:<InverseProtectedRoute><Register/></InverseProtectedRoute>},
    {path:'login',element:<InverseProtectedRoute><Login/></InverseProtectedRoute>},
    {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>},
    ]},
  ])
  return<>
  <RecoilRoot>
  <RouterProvider router={routes}></RouterProvider>
  </RecoilRoot>
  
  
  </>
}
