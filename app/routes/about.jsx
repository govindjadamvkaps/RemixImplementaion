import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { getUserFun } from "../../api";
import AboutCss from '../styles/about.css'


export function meta(){
  return [{
    title: "About page",
    description:
      "This is aabout us page and in this page call a rest api get api in json placeholder",
}]

}
export function links(){
  return[{
    rel:"stylesheet", href: AboutCss 
  }]
}

const About = () => {
  const data = useLoaderData();
  
  return (
    <div>
      <div
        className=" text-center container mx-auto  p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <b>
          <span className="font-medium">List of Users</span>{" "}
        </b>
      </div>

      <div className="container mx-auto mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Website
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
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
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item .phone}</td>
                      <td className="px-6 py-4">{item.website}</td>
                      <td className="px-6 py-4">{item.address.city}</td>
                      <td className="px-6 py-4">
                        <Link
                          to="/"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;

export async function loader({request,params}) {
  let url = new URL(request.url)
  url = url.pathname

  // console.log("aasdfdf",url)
  const data = getUserFun()
  return data
}
