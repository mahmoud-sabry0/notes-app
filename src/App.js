import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Layout from './Components/Layout/Layout'
import { RecoilRoot } from 'recoil'

export default function App() {

  let routes= createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
    {index:true,element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'home',element:<Home/>},
    ]},
  ])
  return<>
  <RecoilRoot>
  <RouterProvider router={routes}></RouterProvider>
  </RecoilRoot>
  
  
  </>
}
