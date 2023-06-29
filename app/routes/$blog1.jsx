import { useLoaderData } from "@remix-run/react";
import React from "react";

export function loader({ params }) {
  console.log(params.blog1);
  return {data:params.blog1} 
}

const Blog1 = () => {
  const  {data}  = useLoaderData();
  console.log("data", data);
  return (
    <div className="container mx-auto">
      {data} <br />
      This is a blog 1
    </div>
  );
};

export default Blog1;
