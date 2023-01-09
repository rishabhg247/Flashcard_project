import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {mainObj} from '../store/actions/action';
import {Formik,Form,Field, FieldArray,ErrorMessage } from 'formik';
import { FaRegEdit } from "react-icons/fa";
import * as yup from 'yup';
import { MdUploadFile,MdOutlineRemoveCircle } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema=yup.object({
    createGroup:yup.string().required(<h1 className='text-red-500 inline'> *required</h1>),
    textarea:yup.string().max(400,<h1 className='text-red-500 inline'>*must be under 400 characters</h1>).required(<h1 className='text-red-500 inline'> *required</h1>),
    secondForm:yup.array().of(yup.object().shape({
        term:yup.string().max(20,<h1 className='text-red-500 inline'>*must be under 20 characters</h1>).required(<h1 className='text-red-500 inline'> *required</h1>),
        def:yup.string().max(220,<h1 className='text-red-500 inline'>*must be under 220 characters</h1>).required(<h1 className='text-red-500 inline'> *required</h1>)}))
})

export default function MainForm() {
    function focusField(index){document.getElementById(`field${index}`).focus();}
    const dispatch=useDispatch();
    const [imgUploaded1, setImgUploaded1] = useState(false);
  return (
    <div >
    <Formik initialValues={{createGroup:'',image:'',textarea:'',secondForm:[{term:'',def:'',image2:''}]}}  validationSchema={validationSchema}
    onSubmit={(values,{resetForm})=> {dispatch(mainObj(values));resetForm({values:''},
        toast.success('New FlashCard Added', {position: "top-right",autoClose: 2000,hideProgressBar: false,closeOnClick:true,pauseOnHover:true,draggable:true,progress:undefined,theme:"light"}))}}>
        {(formik)=>(
            <>
            <Form>
                <section className='bg-white m-6 rounded p-4'>
                    <div className='flex justify-start gap-5  flex-col sm:flex-row  items-center'>
                        <div className=' sm:w-1/2 w-full'>
                            <label htmlFor="createGroup"><span className='text-md font-medium  text-slate-600'>Create Group</span></label> <br />
                            <Field type="text" name='createGroup' className='border w-full border-slate-400 p-1 rounded-md my-2' />
                            <ErrorMessage name='createGroup'/>
                        </div>
        {imgUploaded1?  <div className='flex flex-col'>
                            <MdOutlineRemoveCircle className=' self-end' onClick={() => setImgUploaded1(false)} />
                            <img src={formik.values.image} alt="mainImg" className=' rounded-full w-16 h-16 relative self-center sm:self-end' />
                        </div>
                     :
                        <div className=' border border-blue-800 self-center sm:self-end flex items-end p-1 rounded-md my-2 '>
                            <MdUploadFile className='text-2xl text-blue-700' />
                            <label htmlFor="uploadimg" className='text-blue-700  font-medium text-xs md:text-base  cursor-pointer'>Upload Image</label>
                            <input type="file" id='uploadimg' name='image' onChange={(e)=>(<>
                                {formik.setFieldValue('image',URL.createObjectURL(e.target.files[0]))} ;{ setImgUploaded1(true)}</>
                                )} accept='image/*' className='hidden' />
                        </div>}
                    </div>
                    <div>
                        <label htmlFor="desc" className='text-md font-medium  text-slate-600'>Add Description</label> <br />
                        <Field name='textarea' as ='textarea' className='sm:w-4/6 w-full border border-slate-400 p-1 rounded-md my-2 ' />
                        <ErrorMessage name='textarea'/>
                    </div>
                    </section>
                <FieldArray name='secondForm'
                render={(arrayHelpers)=>{return(
                        <div className='bg-white m-6 rounded p-2'>
                            {formik.values.secondForm.map((i,I)=>(
                            <div className='flex justify-start border-b border-b-slate-300 flex-col sm:flex-row gap-3  items-center' key={I}>
                               <p style={{paddingRight:'11px'}} className='text-2xl sm:self-end self-start mb-2 pl-2 bg-slate-600 rounded-full ml-3 text-white'>{I+1}</p>
                               <div className='sm:w-1/3 w-full' >
                                   <label htmlFor="enterTerm" className='text-md font-medium  text-slate-600'>Enter Term</label> <br />
                                   <Field id={`field${I+1}`} type="text" name={`secondForm.${I}.term`} className='enterTerm border border-slate-400 p-1 rounded-md my-2 w-full ' />
                                   <ErrorMessage name={`secondForm.${I}.term`}/>
                               </div>
                               <div className='sm:w-1/3 w-full '>
                                   <label htmlFor="enterDef" className='text-md font-medium  text-slate-600'>Enter Defination</label> <br />
                                   <Field type="text"  id='enterDef'  name={`secondForm.${I}.def`} className='border border-slate-400 p-1 rounded-md my-2 w-full ' />
                                   <ErrorMessage name={`secondForm.${I}.def`} />
                               </div>

                               {formik.values.secondForm[I].image2?
                               <img src={formik.values.secondForm[I].image2} alt="mainImg" className=' rounded-full w-16 h-16 relative self-center sm:self-end' />
                               :
                               <div className=' border border-blue-800 flex items-end p-1 self-center sm:self-end rounded-md my-2 '>
                               <MdUploadFile className='text-2xl text-blue-700' />
                               <label htmlFor="uploadimg2" className='text-blue-700 font-medium text-md cursor-pointer'>Select Image</label>
                               <input type="file" id='uploadimg2' name={`secondForm.${I}.image2`} onChange={(e)=>(<>
                               {formik.setFieldValue(`secondForm.${I}.image2`,URL.createObjectURL(e.target.files[0]))} ;</>)} 
                               accept='image/*' className='hidden' />
                                </div>
                               }
                               
                               <div className='flex flex-col self-center gap-2'>
                               {formik.values.secondForm.length>1?< MdOutlineRemoveCircle type="button" onClick={() => arrayHelpers.remove(I)}/>:null}
                               <FaRegEdit onClick={()=>focusField(I+1)} className='text-blue-600 cursor-pointer text-base'/>
                               </div>
                            </div>))}
                            <button type='button' className=' text-blue-700 p-2 rounded-md text-md font-medium'  onClick={() => arrayHelpers.push('')}>+ Add More</button>
                        </div>
                    )}}
                />
                    <button type='submit'  className=' m-6 border-2 bg-red-500 text-white font-semibold font-mono px-2 py-1 rounded-lg my-4 text-xl' >Submit
                    </button>
            </Form>
            
            </>
        )}
        
    </Formik>
    <ToastContainer/>
    </div>
  )
}
