import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div id="my_modal_3" className=" w-[400px]">
  <div onSubmit={handleSubmit(onSubmit)} className="modal-box">
    <form method="dialog">

      <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Sign-up</h3>

    <div className='mt-4 space-y-2'>
        <spam>Name:</spam>
        <br/>
        <input type='text'
        placeholder='Enter your FullName' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}></input>
        <br />
        {errors.name && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>


    <div className='mt-4 space-y-2'>
        <spam>Email</spam>
        <br/>
        <input type='text'
        placeholder='Enter your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}></input>
        <br />
        {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>

    <div className='mt-4 space-y-2'>
        <spam>Password</spam>
        <br/>
        <input type='text'
        placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}></input>
        <br />
        {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>

    {/* button */}

    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900'>Sign-up</button>

        <p>
            Have account?{" "}
            <button className='underline text-blue-500 cursor-pointer'
            onClick={() => document.getElementById("my_modal_3").showModal()}> 
            Login
            </button>{" "}
            <Login />
        </p>
        
            
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup