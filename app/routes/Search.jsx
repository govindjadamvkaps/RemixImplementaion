import { useSearchParams } from "@remix-run/react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";


export async function loader({request}){
    const url = new URL(request.url)  
    const q = url.searchParams.getAll('query',"query1")
    console.log(q)
    return {}
}


const Search = () => {
   const [searchParams,setSearchParams] = useSearchParams("")

   const queryString = searchParams.get("query")
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
  return (
    <div className="container mx-auto">
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
