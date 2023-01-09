import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../Imgs/defaultImg.jpeg'
import { MdOutlineKeyboardBackspace, MdContentCopy, MdFacebook, MdShare, MdDownload, MdEmail, MdPrint } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FlashDetails(props) {
    const details = props.cardDetails
    const [activeSlide, setActiveSlide] = useState(0);
    const [shareModal, setShareModal] = useState(false);
    const slider = useRef();
    useEffect(() => { details ? slider.current.slickGoTo(activeSlide) : console.log('not_Found') }, [activeSlide, details]);


    return (
        <>
            {details ?
                <div>
                    <div className='flex justify-start gap-2 mt-4 '>
                        <button><Link to='/my_flashcard'><MdOutlineKeyboardBackspace className='text-2xl text-slate-800 self-center' /></Link></button>
                        <span className='text-xl font-semibold'>{details.createGroup}</span>
                    </div>
                    <div className='text-slate-500 p-3 mb-2 mx-4 font-medium'>{details.textarea}</div>
                    <div className='grid gap-5 md:grid-cols-5 grid-cols-1 '>
                        <div className='bg-white p-2 col-span-2 sm:col-span-1 sm:w-full w-2/3 rounded-md' >
                            <h1 className='text-xs border-b border-slate-400 font-semibold p-2 text-slate-500'>FlashCards</h1>
                            <ul>
                                {details.secondForm.map((i, I) => <li className={activeSlide === I ? 'text-red-600 p-1 px-2 font-semibold' : 'p-1 px-2 font-medium'} key={I}><button onClick={() => setActiveSlide(I)}>{i.term}</button></li>)}
                            </ul>
                        </div>
                        <Slider className='col-span-3 rounded-md p-12 lg:p-8 bg-white' ref={slider} arrows={false} fade beforeChange={(curr, next) => setActiveSlide(next)} dots initialSlide={0} infinite
                            customPaging={(i) => <h1 className={i === activeSlide ? 'bg-slate-500 text-white text-xs mt-8 cursor-pointer font-bold rounded-full' : 'bg-white text-slate-300 text-xs mt-8 cursor-pointer font-bold rounded-full'} >{i + 1}</h1>}  >
                            {details.secondForm.map((i, I) =>
                                <div className='relative' key={I}>
                                    <div className='md:h-48 h-full lg:w-48 w-full' ><img style={{ height: '-webkit-fill-available', width: '-webkit-fill-available' }} className='bg-black rounded-md ' src={i.image2 ? i.image2 : defaultImg} alt='' /></div>
                                    <h1 className='text-slate-400 sm:text-sm text-base  lg:absolute lg:top-0 lg:right-0' style={{ width: '15vw' }}>{i.def} </h1>
                                </div>)}
                        </Slider>
                        <div className='flex sm:flex-col flex-row items-start gap-2 font-semibold text-slate-800'>
                            <div onClick={() => setShareModal(!shareModal)} className='flex items-center py-1 md:px-4  w-full px-1 rounded-md bg-white gap-3'>
                                <MdShare /> <button>Share</button>
                            </div>
                            <div className='flex items-center py-1 sm:px-4 px-1 w-full rounded-md bg-white gap-3'>
                                <MdDownload /> <button>Download</button>
                            </div>
                            <div className='flex items-center py-1 sm:px-4 px-1 w-full rounded-md bg-white gap-3'>
                                <MdPrint /> <button>Print</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='flex'>
                        <button className='flex'><Link to='/'><MdOutlineKeyboardBackspace className='text-2xl text-slate-800 self-center' /><h1 className='font-semibold text-xl'>Go back</h1></Link></button>

                    </div>
                    <h1 className='font-bold text-4xl text-center' >OOPS...NO DETAILS FOUND..</h1>
                </div>
            }
            {shareModal ?
                <div className='absolute w-[100%] h-[100%] left-0 top-0 px-2  bg-zinc-800/60 '>
                    <div className='rounded-md py-8 p-4 shadow-xl flex flex-col justify-between absolute top-[25vh] sm:left-[36vw] left-[30%] w-[200px] sm:w-[30vw] h-48 bg-white'>
                        <h1 className='text-xl font-semibold'>Share</h1>
                        <div className='flex gap-3'>
                            <label htmlFor="share" className='self-center'>Link:</label>
                            <input id='share' className='w-full px-1 text-sm self-center outline-2 outline-slate-400 rounded-md outline-dashed' type='text' value='https://www.almabetter.com/courses/full-stack-web-development-with-web3' />
                            <CopyToClipboard text='https://www.almabetter.com/courses/full-stack-web-development-with-web3' onCopy={() => toast.info('Text Copied To Clipboard', {
                                position: "top-right", autoClose: 2000, hideProgressBar: false,
                                closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"
                            })}>
                                <MdContentCopy className='text-lg cursor-pointer self-center text-slate-500' />
                            </CopyToClipboard>
                            <MdShare className='text-lg self-center text-slate-500' />
                        </div>
                        <div className='flex justify-between'>
                            <MdFacebook className='text-xs cursor-alias sm:text-3xl text-blue-600' />
                            <FaWhatsapp className='text-xs cursor-alias sm:text-3xl text-green-600' />
                            <FaLinkedin className='text-xs cursor-alias sm:text-3xl text-blue-700' />
                            <FaTwitter className='text-xs cursor-alias sm:text-3xl text-cyan-600' />
                            <MdEmail className='text-xs cursor-alias sm:text-3xl text-slate-600' />
                        </div>
                        <RxCross2 className='text-xl absolute top-2 right-2  text-slate-400 cursor-pointer self-end' onClick={() => setShareModal(!shareModal)} />


                    </div>
                    <ToastContainer />
                </div>

                : null}

        </>

    )
}
