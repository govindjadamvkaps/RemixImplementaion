import { useCatch, useSearchParams } from "@remix-run/react";
import { StatusCodes } from "http-status-codes";
import React, { useState } from "react";
import { useLoaderData } from "react-router";


export function meta(){
  return [{
    title: "search page",
    description:
      "This is aabout us page and in this page call a rest api get api in json placeholder",
}]

}

export async function loader({request}){
    const url = new URL(request.url)  
    const q = url.searchParams.getAll('query',"query1")
    console.log(q)
 
    // throw new Response ("search loader error ",{status:StatusCodes.INTERNAL_SERVER_ERROR})

  
    return {}
}



const Search = () => {

   const [searchParams,setSearchParams] = useSearchParams("")
  
   const queryString = searchParams.get("query")
   const val = searchParams.get("query1")
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')


  return (
    <div className="container mx-auto">
      <div>hello {val}</div>
      <p>this is a search <br /> {queryString&& <b>search qruery string {queryString}</b> } </p>
      <form action="">
        <label htmlFor="query">Query parameters:</label>
        <br /> <input type="text" value={text} onChange={(event)=>setText(event.target.value)} name="query" id="query" /> <br />

        <label htmlFor="query1">Query parameters:</label>
        <br /> <input type="text" value={text1} onChange={(event)=>setText1(event.target.value)} name="query1" id="query1" /> <br />
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Search;
