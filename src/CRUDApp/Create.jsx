import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  let[data,setData]=useState({
    name:"",
    age:"",
    place:"",
    dob:""
  })
  let {name,age,place,dob}=data
  let navigate=useNavigate()

  let handleChange=(e)=>{
    let {name,value}=e.target
    setData({...data,[name]:value})

  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,place,age,dob)
    axios.post("http://localhost:3000/users",data)
    .then((val)=>{
      console.log("success")
      // toast.success("Success Notification !", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      navigate("/")
    })
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Name</label>
    <input type='text' name='name' id='name' value={name} onChange={handleChange}/><br /><br />
    <label htmlFor='age'>Age</label>
    <input type='tel' name='age' id='age' value={age} onChange={handleChange}/><br /><br />
    <label htmlFor='place'>Place</label>
    <input type='text' name='place' id='place' value={place} onChange={handleChange}/><br /><br />
    <label htmlFor='dob'>DOB</label>
    <input type='date' name='dob' id='dob' value={dob} onChange={handleChange}/><br /><br />
    <input type='submit' value='register'/>
    <button><Link to="/">Go Back</Link></button>
    </form>
    <ToastContainer />
    </>
  )
}

export default Create