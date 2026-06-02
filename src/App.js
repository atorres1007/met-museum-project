import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from './Pages/Navbar';
import Home from './Pages/HomePage';
import ArtPage from "./Pages/ArtPage";

export default function App () {

  const [departmentData, setDepartmentData] = useState()

  const getDepartments = async () => {
    const response = await fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/departments");
    const data = await response.json();
    setDepartmentData(data.departments)
  };
  
  useEffect(() => {
    getDepartments()
  },[]);


  return (
    <div>
      <Navbar departmentData={departmentData}/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/departments/:departmentName" element={<ArtPage departmentData={departmentData}/>}/>
          </Routes>
        </div>
    </div>
  )
}