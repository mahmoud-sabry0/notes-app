import React from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NotAtoms'
export default function Layout() {
  let[noteLength,setnoteLength]=useRecoilState(noteState)

  return <>
  <div style={{backgroundColor:"#0DCAF0"}} className='w-100 p-2 text-white text-center '>Notes App : {noteLength}</div>
  <Outlet></Outlet>
  </>
}
