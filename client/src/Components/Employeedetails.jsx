import React from "react";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaLandmarkDome } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Employeedetails = () => {
  const empdata = useSelector((store) => store.empDtls);
  console.log(empdata);
  return (
    <>
      <div className="grid place-items-center bg-slate-900 h-screen">
        <div className="flex justify-around shadow-2xl p-6 w-[60%]  mt-16 m-auto font-mono bg-slate-700 text-white rounded-lg hover:bg-cyan-800   transition duration-300 delay-150 hover:delay-200">
          <div>
            <img src={`http://localhost:8000/imgupload/${empdata.imgpath}`} alt="logo" className="w-72  rounded-2xl "/>
          </div>
          <div>
            <span className="text-center">
              Name&nbsp; : {empdata.name}
            </span>
            <div className="flex flex-wrap">
              <MdEmail className="text-2xl text-red-600" />
              &nbsp; : {empdata.email}
            </div>
            <div className="flex flex-wrap mt-2">
              <BsTelephoneFill className="text-2xl text-blue-600" />
              &nbsp; : 91+{empdata.contact}
            </div>
            <h2>
              Status :&nbsp;{" "}
              <span className="text-red-500">
                {" "}
                <b> {empdata.status} </b>{" "}
              </span>
            </h2>
            <h2>
              Dob :&nbsp;{" "}
              <span>
                {" "}
                <b> {empdata.dob} </b>{" "}
              </span>
            </h2>
            <h2>
              Joining Date :{" "}
              <span>
                {" "}
                <b> {empdata.jd} </b>{" "}
              </span>
            </h2>
            {
              empdata.gender === "male" ? 
            
            <div className="flex flex-wrap mt-2">
              <FaMale className="text-2xl text-yellow-600" /> &nbsp;: {empdata.gender}
            </div>:
             <div className="flex flex-wrap mt-2">
              <FaFemale className="text-2xl text-yellow-500" />&nbsp;:
                Female
            </div> }
            <div className="flex flex-wrap mt-2">
              <IoHome className="text-2xl text-green-600" /> &nbsp;: {empdata.home}
            </div>
            <div className="flex flex-wrap mt-2">
              <FaLandmarkDome className="text-2xl text-cyan-600" /> &nbsp;:
              {empdata.landmark}
            </div>
            <h2>
              District :{" "}
              <span>
                {" "}
                <b> {empdata.district} </b>{" "}
              </span>
            </h2>
            <h2>
              State :{" "}
              <span>
                {" "}
                <b> {empdata.state} </b>{" "}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employeedetails;
