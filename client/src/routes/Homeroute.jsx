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
    getdata();
  }, []);

  const navigate = useNavigate();
  const addnewEmployee = () => {
    navigate("/addemp");
  };

  ////////////////////////////////////////////////////////////////////
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
      {empdata.length > 0 ? (
        empdata.map((data, index) => <Home empdata={data} key={index} />)
      ) : (
        <Spiner />
      )}
    </>
  );
}
