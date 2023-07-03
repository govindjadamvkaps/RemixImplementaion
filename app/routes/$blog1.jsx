import { useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import { BsFillEyeSlashFill } from "react-icons/bs";


import { IoIosEye } from "react-icons/io";

export function loader({ params }) {
  // console.log(params.blog1);
  return {data:params.blog1} 
}

const Blog1 = () => {

  const [showPassword,setShowPassword]=useState(false)
  const  {data}  = useLoaderData();
  // console.log("data", data);

  const handleClick = ()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div className="container mx-auto">
      {data} <br />
    This is a blog {data}

    <div className="container mx-auto mt-5">
      <label htmlFor="password">Password</label><br />
      <input type={showPassword?'text':'password'} name='password' id="password"/>
    <button onClick={handleClick} style={{fontSize:"30px"}}>
      {showPassword?<IoIosEye/>:<BsFillEyeSlashFill/>}
    </button>

    </div>
    </div>
    
  );
};

export default Blog1;
