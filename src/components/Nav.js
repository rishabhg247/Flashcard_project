import React from 'react';
import img1 from '../Imgs/logo.jpg';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='shadow-lg w-full  bg-white'>
       <Link to='/'><img src={img1} alt ='' className='w-36 mb-1 p-2 pb-3' /></Link>
    </div>
  )
}
export default Nav;
