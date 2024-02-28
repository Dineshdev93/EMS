import React from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate,Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { emdtlsActions } from "../Store/empSlice";
import {ToastContainer,toast} from "react-toastify"
import axios from "axios";
const Home = ({ empdata }) => {
  const dispatch = useDispatch()
  const navigation = useNavigate();
  const empDtls = (data) => {
    dispatch(emdtlsActions.employeedetails(data))
    navigation("/details");
  };
  // delete item api calling
  const itemdeleted =async() =>{
    try {
     const result = await axios.delete(`http://localhost:8000/delete/${empdata._id}`)
      console.log("item deleted"+result);
    } catch (error) {
        console.log(error);
    }
      setTimeout(()=>{
        navigation("/addemp")
      },2000)
      toast.info("Item deleted ...")
  }
  return (
    <>
      <div>
        <table className="w-[98%] ml-4 text-center table-fixed     border border-separate  font-mono">
          <tbody className="bg-gray-700 text-white">
            <tr className="text-md">
             
              <td className="">{empdata.name}</td>
              <td className="">{empdata.email}</td>
              <td>{empdata.contact}</td>
              <td className="w-20">{empdata.status === "Active" ? <span className="text-green-400  text-[17px]">{empdata.status}</span> : <span className="text-red-400  text-[17px]">{empdata.status}</span>}  </td>
              <td className="w-20">
                <MdDelete className="text-4xl ml-6 text-center text-red-600 cursor-pointer" onClick={itemdeleted}/>
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
              </td>
              <td className="w-20">
                <Link to={`/editemp/${empdata._id}`}>
                <FaUserEdit className="text-4xl ml-8 text-center text-green-600" />
                    
                </Link>
              </td>
              <td onClick={()=>empDtls(empdata)} className="cursor-pointer w-[64px] bg-white">
                <img
                  className=" rounded-[40px] h-12 w-12 ml-2"
                  src={`http://localhost:8000/imgupload/${empdata.imgpath}`}
                  alt="logo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
