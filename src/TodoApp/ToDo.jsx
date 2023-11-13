import React, { Fragment, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'


const ToDo = () => {

    let[inputvalue,setvalue]=useState("")
    let[listitems,setListitems]=useState([])
    let[editindex,setEditindex]=useState(null)
let handleChange=(e)=>{
    setvalue(e.target.value)
    
}
let handleClear=()=>{
    setListitems([])
}

let handleAdd=()=>{
    if(inputvalue!="")
    {
        if(editindex!==null)
        {
            listitems[editindex]=inputvalue;
            setEditindex(null)
        }
        else{
            setListitems([...listitems,inputvalue])
            setvalue("")
        }
    }
    
}
let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputvalue)
}

let handleDelete=(id)=>{
   let newlist= listitems.filter((val,index)=>{
        return index!==id
    })
    setListitems(newlist)

}

let handleEdit=(id)=>{
    setvalue(listitems[id])
    setEditindex(id)
    
}
  return (
    <>
    
      <div id='maindiv'>
        <div id='submain'>
    <form onSubmit={handleSubmit}>
        <h1>TO-DO-LIST</h1>
        <input type="text" name='inputValue' id='inputValue' value={inputvalue} onChange={handleChange} autoComplete='off' placeholder='Plan for today..'/>
        <button onClick={handleAdd} id='add'>{editindex!==null?"UPDATE ITEMS":"ADD ITEMS"}</button>
    </form>
    
    <section>
       {listitems.map((val,index)=>{
        return(
            
            <Fragment key={index}>  
            
            <h3>{val}  <button className='e' onClick={()=>handleEdit(index)}><FaRegEdit/></button>
            <button onClick={()=>handleDelete(index)} className='e'><FaRegTrashCan/></button></h3>
           
          
            </Fragment>
        )

        }
        )}
        <button onClick={handleClear} id='clearall'>CLEAR-ALL</button>
    </section>
    </div>
    </div>
    </>
  )
}

export default ToDo