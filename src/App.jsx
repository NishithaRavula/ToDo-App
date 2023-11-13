import React from 'react'
import ToDo from './TodoApp/ToDo'
import './ToDoStyles.css'
import {FaRegEdit} from 'react-icons/fa'

const App = () => {
  return (
    <>
    <ToDo/>
    </>
  )
}

export default App

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./CRUDApp/Home";
// import Update from "./CRUDApp/Update";
// import Create from "./CRUDApp/Create";
// import Read from "./CRUDApp/Read";



// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/read/:id" element={<Read/>} />
//           <Route path="/update/:id" element={<Update/>} />
//           <Route path="/create" element={<Create/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
