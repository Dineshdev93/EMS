
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Editemployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState("");
  const [jd, setJd] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [select, setSelect] = useState("");
  const params = useParams()
  const getEmpdata = `http://localhost:8000/employees/api/getone/${params.id}`;
  
  const getapi = async() =>{
   const result =   await axios.get(getEmpdata)
   setName(result.data.name) 
   setEmail(result.data.email)
   setContact(result.data.contact)
   setDob(result.data.dob)
   setJd(result.data.jd)
   setCity(result.data.home)
   setLandmark(result.data.landmark)
   setDistrict(result.data.district)
    setState(result.data.state)
    setStatus(result.data.status)
    setSelect(result.data.gender)
  }
  useEffect(()=>{
  getapi()
  },[])
  
   const employeedata  = {
      name , email,contact,dob,jd,city,landmark,district,state,status,select
   }
   const navigate= useNavigate()
   const updaterFun = async(e) =>{
      e.preventDefault()
      let result = await axios.put(`http://localhost:8000/employees/api/editapi/${params.id}`,employeedata)
      if(result){
         setTimeout(() => {
          navigate("/")
         }, 2000);
      }
      toast.success("data has been upadated!")
   }

  return (
    <>
      <div className="mt-12">
        <h1 className="text-3xl text-center">Update Employee Details</h1>
      </div>
      <form action="post">
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="name" className="font-mono text-xl">
              Employee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter employee name"
              value={name}
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="useremail" className="font-mono text-xl">
              Email
            </label>
            
            <input
              type="text"
              name="email"
              id="useremail"
              placeholder="enter employee email"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="cont" className="font-mono text-xl">
              Contact
            </label>
            
            <input
              type="text"
              id="cont"
              name="contact"
              placeholder="enter mobile number"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={contact}
              onChange={e=>setContact(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="stat" className="font-mono text-xl">
              Status
            </label>
           
            <input
              type="text"
              id="stat"
              name="status"
              placeholder="employee status"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              value={status}
              onChange={e=>setStatus(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="jdate" className="font-mono text-xl">
              Joining date
            </label>
            
            <input
              type="date"
              id="jdate"
              name="jd"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={jd}
              onChange={e=>setJd(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="jdate" className="font-mono text-xl">
              Gender
            </label>
            
            <input
              type="text"
              id="gender"
              name="gender"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={select}
            />
          </div>
          {/* <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="font-mono text-xl">
              Gender
            </label>
            <div className="flex text-xl font-mono mt-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                
              />
              <label htmlFor="male" className="ml-1">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                className="ml-3"
                value={"female"}
              
              />
              <label htmlFor="female" className="ml-1">
                Female
              </label>
              <input
                type="radio"
                name="gender"
            
                value={"other"}
                id="other"
                className="ml-3"
              />
              <label htmlFor="other" className="ml-1">
                Other
              </label>
            </div>
          </div> */}
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="home" className="font-mono text-xl">
              City
            </label>
            <input
              type="text"
              id="home"
              name="home"
              placeholder="enter city"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={city}
              
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="landmarks" className="font-mono text-xl">
              Landmark
            </label>
            
            <input
              type="text"
              id="landmarks"
              name="landmark"
              placeholder="enter landmark"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
               onChange={(e)=>setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="zila" className="font-mono text-xl">
              District
            </label>
            <input
              type="text"
              name="district"
              id="zila"
              placeholder="enter district name"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={e=>setDistrict(e.target.value)}
              value={district}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="states" className="font-mono text-xl">
              State
            </label>
           
            <input
              type="text"
              name="state"
              id="states"
              placeholder="enter state"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
               onChange={e=>setState(e.target.value)}
              value={state}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-5 ">
          
          <div className="flex flex-col w-[93%]">
            <label htmlFor="date" className="font-mono text-xl ml-10">
              Date of birth
            </label>
           
            <input
              id="date"
              type="date"
              name="dob"
              className="w-[90%] ml-10 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
               value={dob}
               onChange={e=>setDob(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-[93%] ">
            <button
              className="bg-red-700 w-[90%] ml-10 text-white text-2xl p-1 rounded-sm mb-2 hover:bg-green-700 hover:text-black"
              onClick={updaterFun}
            >
              Update
            </button>
            <ToastContainer
              position="top-center"
              autoClose={1900}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Flip
            />
          </div>
        </div>
      </form> 
    </>
  )
}

export default Editemployee
