import React from 'react'
import { useRecoilState } from 'recoil'
import { noteState } from '../Atoms/NotAtoms'

export default function Sidebar() {
let [text ,setText]= useRecoilState(noteState)

  return <>
    
    <div>
<div className="p-0 min-vh-100 bg-dark">
    <ul className='text-light list-unstyled'>
<li className='p-3 pe-lg-2 d-lg-flex d-none'>

<i className="bi bi-journals"></i>
<p className='ps-3 fs-4'>Notes</p>

</li>
<li className='p-3 pe-lg-5 sideber-element'>
    <a href="/#" className='nav-link px-0 px-lg-2'><i className='bi bi-house'/><span className='px-lg-2 ms-1 d-none d-lg-inline'>Home {text}</span></a>
</li>
<li className='p-3 pe-lg-5 sideber-element'>
    <a href="/#" className='nav-link px-0 px-lg-2'><i className='bi bi-box-arrow-lrft'/><span className='px-lg-2 ms-1  d-none  d-lg-inline'>Logout</span></a>
</li>
    </ul>
</div>

    </div>
    </>
}

