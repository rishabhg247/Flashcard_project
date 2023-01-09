import React, { useEffect } from 'react';
import '../styles.css';
import img2 from '../Imgs/flashSign.png';
import { Link } from 'react-router-dom';
import { removeAll, removeOne } from '../store/actions/action';
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";



export default function FlashGrid(props) {
  const obj = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();
  useEffect(() => { localStorage.setItem('mainObj', JSON.stringify(obj)) }, [obj])


  return (
    <>
      {obj.length === 0 ? <div className='flex justify-center font-semibold font-serif my-20 text-3xl'>OOPS...NO FLASHCARD AVAILABLE..</div> :
        <div className='flex flex-col gap-5 m-6 p-4 mt-12'>
          <div className=' grid gap-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 '>
            {obj.map((i, I) =>
              <div key={I} className='hover:scale-105 transition-all shadow-lg flex relative flex-col bg-white items-center gap-3 rounded-lg p-3'>
                <img src={i.image ? i.image : img2} alt='' style={{ position: 'absolute', top: '-30px' }} className='w-16 h-16 hover:rounded-md rounded-full' />
                <h1 className='text-medium mt-5 font-bold'>{i.createGroup}</h1>
                <p id='parra' className='text-slate-500 pl-2 text-sm'>{i.textarea}</p>
                <span className='text-slate-500'>{i.secondForm.length} {i.secondForm.length > 1 ? "cards" : 'card'}</span>
                <button className='border-2 border-red-600 text-red-600 w-4/6 rounded-md font-semibold'
                  onClick={() => props.newCard(I)}><Link to='/flash_details' >View Cards</Link></button>
                <button className=' border border-slate-800 text-slate-700 rounded-full p-1 text-lg' style={{ position: 'absolute', top: '-10px', right: '-8px' }} onClick={() => dispatch(removeOne(I))}><MdDelete /></button>
              </div>
            )}
          </div>
          <button onClick={() => dispatch(removeAll())} className='border shadow-md self-center p-2 text-xl text-white  rounded-lg border-black font-mono bg-red-600 hover:bg-red-700'>Delete All</button>
        </div>
      }
    </>

  )
}
