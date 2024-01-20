import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";



export const Home = () => {
  return (
    <div>
      <Outlet />

      <div className="text-center border-green-500" >
        <h1 className="text-5xl font-bold">Sign Up Form</h1><br />
<input placeholder="Enter Email Address" className="w-96 min-h-12 bg-sky-200" type="email" />
<br /> <br />
<input placeholder="Enter Password" className="w-96 min-h-12 bg-sky-200" type="passoword" />
<div className="text-center"><br /><br />
<button className="w-40 text-2xl bg-blue-500 min-h-16 font-bold">Submit</button>
{/* <Link to= "/">
</Link> */}

      </div>
<h2 className="text-2xl">Already Have an Account? LogIn Here</h2> <br />
      </div>
     
    </div>
  );
};