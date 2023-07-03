import { useForm } from "react-hook-form";
import { postUserFun } from "../../api";
import { useActionData } from "@remix-run/react";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";
import {MyInput} from '../components/MyInput'
import { MySubmitButton } from "../components/MySubmitButton";
import { DataFunctionArgs } from "@remix-run/node";


export function meta(){
  return [{
    title: "contacts page",
    description:
      "This is a contact us page and in this page call a rest api get api in json placeholder",
}]

}

export const validator = withZod(
  z.object({

    name: z.string().min(3),
    phone: z
      .string()
      // .regex([1-9]\d{1,14}$/) // Example: +12345678901234

      .min(10, { message: "Phone number is must 10 digits" })
      .max(10),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Must be a valid email"),

    city: z
    .string()
    .min(2,{ message:"City is required"}),
    
    password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password can be at most 20 characters long"),

  })
);

const Contacts = () => {
  // const data = useActionData();
  // const {
  //   register,
  //   reset,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const postData = async(user) =>{
  //   try {
  //     console.log(user)
  //     return user
  //   } catch (error) {
  //     console.log("error in post user", error)
  //   }
  // }
  return (
    <>
      <div className=" container mx-auto">
        <h3 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Contact Form
          </span>{" "}
        </h3>
      </div>

      <div className="container mx-auto">
        <ValidatedForm validator={validator} method="post">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div  >
            <MyInput name="name" label="Name" />
            </div>

            <div >
            <MyInput name="email" label="Email" />
            </div>
          
            <div  >
            <MyInput name="phone" label="Phone" />
            </div>
          </div>
          <div >
          <MyInput name="city" label="City" />
          </div>
          <div className="mt-6 mb-6" >
          <MyInput  name="password" label="Password" />
          </div>
         
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <MySubmitButton />
        </ValidatedForm>
      </div>
    </>
  );
};

export default Contacts;


export async function action(data:any){
console.log("request",data)
const {request} = data
const formData =await request.formData()

const user = Object.fromEntries(formData)
const result = await postUserFun(user)

// const result = postUserFun(data)



return {}
}