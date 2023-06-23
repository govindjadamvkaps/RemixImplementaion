import  Modal  from "../components/Modal";
import Card from "../components/Card";
import Heading from "../components/Heading";
import DropDown from "../components/DropDown";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
   <DropDown/>
    <Modal/>
    <Heading/>
  <div className="container mx-auto grid gap-x-8 gap-y-4 grid-cols-3 mt-5">
    <Card/>
    <Card/>
    <Card/>

   

    </div> 
    </>
  );
}


