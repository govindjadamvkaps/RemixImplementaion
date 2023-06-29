import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { toast, ToastContainer } from "react-toastify";

export async function getUserFun() {
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
    );
    // console.log("response", response)
    const data = await response.data;
    // console.log("data",data)
    return data;
  } catch (error) {
    console.log("error in fetching user", error);
  }
}

export const postUserFun = async (data) => {
  try {
      
    console.log("userr", data);
    const resp = await axios.post(`http://localhost:5000/api/user`, data);

    console.log(resp.data);

    if (resp.status === StatusCodes.CREATED) {
      toast.success("User data saved", {
        position: "top-center",
      });
      
      
    }
    <ToastContainer/>
  } catch (error) {
    toast.error("error in data save", {
      position: "top-center",
    });
    console.log("error in post user ", error);
  }
};


export async function getData(){
  try {
    let data = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    data =await data.data
    return data

  } catch (error) {
    console.log("Error in fetching data",error)
  }
}