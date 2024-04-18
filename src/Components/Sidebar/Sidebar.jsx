import React from 'react'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NotAtoms'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar() {
let [text ,setText]= useRecoilState(noteState) 
let navigate= useNavigate()
function logout(){
    localStorage.removeItem('userToken')
}


  return <>
    
    <div>
<div className="p-0 min-vh-100 bg-dark ">
    <ul className='text-light list-unstyled  '>
<li className='p-3 pe-lg-2 d-lg-flex d-none'>

<i className="bi bi-journals"></i>
<p className='ps-3 fs-4 pt-5'>Notes</p>

</li>
<li className='p-3 pe-lg-5 sideber-element'>
    <a href="/#" className='nav-link px-0 px-lg-2'><i className='bi bi-house'/><span className='px-lg-2 ms-1 d-none d-lg-inline'>Home {text}</span></a>
</li>
<li className='p-3 pe-lg-5 sideber-element '>
    <Link to="/Login" className='nav-link px-0 px-lg-2' onClick={logout}><i className='bi bi-box-arrow-lrft'/><span className='px-lg-2 ms-1  d-none  d-lg-inline'>Logout</span></Link>
</li>
    </ul>
</div>

    </div>
    </>
}

