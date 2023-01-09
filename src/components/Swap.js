import React from 'react';
import {NavLink} from 'react-router-dom';

function Swap() {
  return (
        <div>
          <h1 className='text-2xl mt-8 font-semibold'>Create Flashcard </h1>
          <div className='flex gap-20 py-2 px-2 border-b  border-b-slate-400'>
            <button style={{borderColor:'#F0F0F0'}} className='text-lg rounded-sm hover:scale-95 font-medium'><NavLink to='/' >Create New</NavLink></button>
            <button style={{borderColor:'#F0F0F0'}} className='text-lg  rounded-sm font-medium hover:scale-95'><NavLink
            to ='/my_flashcard'>My Flashcard</NavLink></button>
          </div>
        </div>
  )
}
export default Swap;
