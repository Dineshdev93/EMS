import React, { useEffect, useState } from "react";
import Home from "../Components/Home";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spiner from "../Components/Spiner";
export default function Homeroute() {
  const [empdata, setEmpdata] = useState([]);
  const getEmpdata = "http://localhost:8000/getdata";
  const getdata = async () => {
    let result = await axios.get(getEmpdata);
    setEmpdata(result.data);
  };
  useEffect(() => {
      const pagedatacount  = Math.ceil(empdata.length/2)
      setPageCount(pagedatacount)
      if(page){
        const Limit = 2
        const skip = Limit*page
        const dataskip = empdata.slice(skip-Limit,skip)
        setPageData(dataskip)
      }
  }, [empdata]);
     
  console.log(empdata);

   /////////////////////////////////////////
  //  Pagination functionlity
  const[pagedata,setPageData] = useState([])
  const [page,setPage] = useState(1)
  const [pagecount,setPageCount] = useState(0)

  // handle next button
  const handleNext = () =>{
    if(page === pagecount) return page
    setPage(page+1)
  }
  // handle previous button
  const handlePrev = () =>{
     if(page === 1) return page
     setPage(page-1)
  }
  useEffect(() => {
    getdata();
  }, [page]);

  ////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const addnewEmployee = () => {
    navigate("/addemp");
  };
  // for filtering data by gender...
  const [genderValue, setGenderValue] = useState("");

  const genderData = async () => {
    const result = await axios.get(
      `http://localhost:8000/searchdata/${genderValue}`
    );
    setEmpdata(result.data);
  };
  useEffect(() => {
    genderData();
  }, [genderValue]);

  ////////////////////////////////////////////////////////////////////
  // for getting all data

  const reset = () => {
    getdata();
  };
  ///////////////////////////////////////////////////////////////////
  // sort data by status
  const [statusValue, setStatusValue] = useState("");
  const sortbystatus = async () => {
    const result = await axios.get(
      `http://localhost:8000/status/${statusValue}`
    );
    setEmpdata(result.data);
  };
  useEffect(() => {
    sortbystatus();
  }, [statusValue]);

 
  return (
    <>
      <h1 className="text-center text-3xl mt-4">
        Welcome to Employee Management System
      </h1>
      <div className="flex justify-between font-mono mt-10">
        <button
          className="ml-3 mt-2 bg-green-700 text-white rounded-lg h-9 w-40 p-1 hover:bg-slate-700"
          onClick={addnewEmployee}
        >
          Add New Employee
        </button>
        <button
          className=" bg-blue-700 mt-2 text-white rounded-lg h-9 w-28 p-1 hover:bg-gray-900"
          onClick={reset}
        >
          Reset All
        </button>
        <div className=" flex flex-col">
          <label htmlFor="gender" className="text-3xl">
            Filter By Gender
          </label>
          <div className="flex justify-center">
            <div className="flex text-xl">
              <input type="radio" name="gender" id="all" onClick={reset} />
              &nbsp;
              <label htmlFor="gender">All</label>
            </div>
            <div className="flex text-xl ml-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                onChange={(e) => setGenderValue(e.target.value)}
              />
              &nbsp;
              <label htmlFor="">Male</label>
            </div>
            <div className="flex text-xl ml-2">
              <input
                type="radio"
                name="gender"
                value={"female"}
                id="female"
                onChange={(e) => setGenderValue(e.target.value)}
              />
              &nbsp;
              <label htmlFor="">Female</label>
            </div>
          </div>
        </div>
        <div className="mr-10">
          <h1 className="text-2xl">Sort By Status</h1>
          <select
            className="text-white  focus:outline-none bg-red-700 text-center  rounded-lg p-2 ml-4 cursor-pointer hover:bg-green-700"
            onChange={(e) => setStatusValue(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Active" className="text-white bg-red-500">
              Active
            </option>
            <option value="InActive" className="text-white bg-gray-400">
              Inactive
            </option>
          </select>
        </div>
      </div>

      <table className="w-[98%] ml-4 mt-5 p-3   table-fixed   font-mono">
        <thead className="bg-gray-900 text-white  ">
          <tr className="">
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Contact</th>
            <th className="w-20">Status</th>
            <th className="w-20">Delete</th>
            <th className="w-20">Edit</th>
            <th className="w-20 p-2">Profile</th>
          </tr>
        </thead>
      </table>
      {pagedata.length > 0 ? (
        pagedata.map((data, index) => <Home empdata={data} key={index} />)
      ) : (
        <Spiner />
      )}
       <div className='mt-2 inline-block mb-5 float-right'>
         <span className='px-10 text-2xl cursor-pointer' aria-disabled={page === 1} onClick={handlePrev}>&laquo;</span>
         {/* <span className='px-3 border border-separate p-1 bg-slate-400 rounded-md text-white hover:bg-slate-900'>1</span>
         <span className='px-3 border-separate p-1 bg-slate-400 rounded-md text-white ml-2 hover:bg-slate-900'>2</span>
         <span className='px-3 border-separate p-1 bg-slate-400 rounded-md text-white ml-2 hover:bg-slate-900'>3</span> */}
         <span className='px-10 text-2xl cursor-pointer'onClick={handleNext}>&raquo;</span>
         </div>
    </>
  );
}
