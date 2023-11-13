import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let[users,setUsers]=useState([])

useEffect(()=>{
  axios.get("http://localhost:3000/users")
  .then((result)=>setUsers(result.data))
  .catch((error)=>console.log(error))
},[])

let handleDelete=(id)=>{
  axios.delete("http://localhost:3000/users/"+id)
  .then(()=>{
    console.log("deleted successfully")
    window.location.reload()
  })
}

  return (
    <>
    <button><Link to="/create">ADD</Link></button>
    <table>
    <tr>
      <td>ID</td>
      <td>NAME</td>
      <td>AGE</td>
      <td>PLACE</td>
      <td>DOB</td>
    </tr>

    
    {
     users.map((val)=>{
      return (
        <React.Fragment key={val.id}>
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.place}</td>
              <td>{val.dob}</td>
              <button><Link to={`/read/${val.id}`}>Read</Link></button>
              <button><Link to={`/update/${val.id}`}>Edit</Link></button>
              <button onClick={()=>handleDelete(val.id)}>Delete</button>
            </tr>
        </React.Fragment>
      )
     })
    }
    
    </table>
    </>
  )
}

export default Home