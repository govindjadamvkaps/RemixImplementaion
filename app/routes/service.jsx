import React from 'react'
import ServiceCss from '../styles/service.css'
import { getData } from '../../api'
import { Link, useLoaderData } from '@remix-run/react'
import { StatusCodes } from 'http-status-codes'
export function links(){
  return[{
    rel:"stylesheet", 
    href:ServiceCss

    // Bootsstrap integration

    // href : "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" ,crossorigin:"anonymous"
  }]
}

export const loader = async()=>{ 
  const data =await getData()

//  throw new Response('Not Found', {status:StatusCodes.NOT_FOUND})
  // console.log(data)
  return data
}

export function meta(){
  return [{
    title: "Service page",
    description:
      "This is a service us page and in this page call a rest api get api in json placeholder",
}]

}

const Service = () => {
   let data = useLoaderData()
   data = data.slice(0,40) // array length is 9
  //  data = data.splice(1,10) // array length is 10
  // console.log("data", data)
  return (
    <div className='container mx-auto '> 
      
   <h1><b>this is a services page</b></h1>

   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                albumId
                </th>
                <th scope="col" className="px-6 py-3">
                title
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                thumbnailUrl
                </th>
               
                
                <th scope="col" className="px-6 py-3">
                  Actions
                </th> */}
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => {
                return (
                  <>
                    <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4">{item.id}</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.albumId}
                      </th>
                      <td className="px-6 py-4">{item.title}</td>
                      {/* <td className="px-6 py-4" ><img src={item .url} alt="" style={{width:"3rem"}}/></td>
                      <td className="px-6 py-4"><img src={item.thumbnailUrl} alt="" style={{width:"3rem"}}/></td>
                     
                      <td className="px-6 py-4">
                        <Link
                          to="/"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td> */}
                    </tr>
                  </>
                );
              })}

            </tbody>
          </table>

    </div>
  )
}

export default Service




