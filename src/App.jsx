import { Routes, Route } from "react-router-dom"
import { Register } from "./Pages/Register"
import {Login} from "./Pages/Login"
import { AddJob } from "./Pages/JobForm"
import { Detail } from "./Pages/Details"
import { JobListing } from "./Pages/Listing"
function App() {

  return (
   <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addJob" element={<AddJob/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/listing" element={<JobListing/>}/>
        <Route path="/" element={<JobListing/>} />
   </Routes>
  )
}

export default App