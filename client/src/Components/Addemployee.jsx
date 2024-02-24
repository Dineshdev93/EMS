import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addemployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("");
  const [img, setImg] = useState("");
  const [dob, setDob] = useState("");
  const [jd, setJd] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      email.length === 0 ||
      contact.length === 0 ||
      status.length === 0 ||
      state.length === 0 ||
      dob.length === 0 ||
      jd.length === 0 ||
      city.length === 0 ||
      landmark === 0 ||
      district === 0
    ) {
      setError(true);
    } else {
      let formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("contact", contact);
      formdata.append("status", status);
      formdata.append("photo", img);
      formdata.append("dob", dob);
      formdata.append("jd", jd);
      formdata.append("gender", select);
      formdata.append("home", city);
      formdata.append("landmark", landmark);
      formdata.append("district", district);
      formdata.append("state", state);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const url = "http://localhost:8000/postdata";
      let result = await axios.post(url, formdata, config);
      if (result) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      toast.success("Data has been added")
      console.log(select);
    }
  };
  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  
  return (
    <>
    
      <div className="mt-12">
        <h1 className="text-3xl text-center">Register New Employee</h1>
      </div>
      <form action="post">
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="name" className="font-mono text-xl">
              Employee Name
            </label>
            {error & (name.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter employee name"
              value={name}
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="useremail" className="font-mono text-xl">
              Email
            </label>
            {error & (email.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              name="email"
              id="useremail"
              placeholder="enter employee email"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="cont" className="font-mono text-xl">
              Contact
            </label>
            {error & (contact.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              id="cont"
              name="contact"
              placeholder="enter mobile number"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="stat" className="font-mono text-xl">
              Status
            </label>
            {error & (status.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              id="stat"
              name="status"
              placeholder="employee status"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="picture" className="font-mono text-xl">
              Upload Image
            </label>
            <input
              type="file"
              id="picture"
              name="photo"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="date" className="font-mono text-xl">
              Date of birth
            </label>
            {error & (dob.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              id="date"
              type="date"
              name="dob"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="jdate" className="font-mono text-xl">
              Joining date
            </label>
            {error & (jd.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="date"
              id="jdate"
              name="jd"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={(e) => setJd(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="" className="font-mono text-xl">
              Gender
            </label>
            <div className="flex text-xl font-mono mt-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <label htmlFor="female" className="ml-1">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value={"other"}
                id="other"
                className="ml-3"
              />
              <label htmlFor="other" className="ml-1">
                Other
              </label>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="home" className="font-mono text-xl">
              City
            </label>
            {error & (city.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              id="home"
              name="home"
              placeholder="enter city"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="landmarks" className="font-mono text-xl">
              Landmark
            </label>
            {error & (landmark.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              id="landmarks"
              name="landmark"
              placeholder="enter landmark"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
        </div>{" "}
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-2/5 ">
            <label htmlFor="zila" className="font-mono text-xl">
              District
            </label>
            {error & (district.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              name="district"
              id="zila"
              placeholder="enter district name"
              className="border border-separate w-11/12 p-3 focus:outline-none rounded-md focus:bg-slate-100"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
            />
          </div>
          <div className="flex flex-col w-[40%]">
            <label htmlFor="states" className="font-mono text-xl">
              State
            </label>
            {error & (state.length === 0) ? (
              <span style={{ color: "red" }}>Field can not be empty</span>
            ) : (
              ""
            )}
            <input
              type="text"
              name="state"
              id="states"
              placeholder="enter state"
              className="w-11/12 p-3 focus:outline-none border border-separate rounded-md focus:bg-slate-100"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-5 ">
          <div className="flex flex-col w-[93%] ">
            <button
              className="bg-red-700 w-[90%] ml-10 text-white text-2xl p-1 rounded-sm mb-2 hover:bg-green-700 hover:text-black"
              onClick={register}
            >
              Register
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
  );
};

export default Addemployee;
