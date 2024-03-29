"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios, {Axios} from "axios";
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import background from "./bg.jpg"

export default function SignUp(){
    const router = useRouter();  
    const [user,setUser] = React.useState({
        fullname:"",
        usertype:"",
        email:"",
        password:"",
        year_sem:"",
    })

    //const [buttonDisabled,setButtonDisabled] = React.useState(false);

    const onSignup = async () => {
      try {
          const response = await axios.post("/api/users/sign_up",user);
          console.log("Signup success",response.data);
          router.push("/sign_in");
      } catch (error:any) {
          console.log("Signup failed",error.message);
          //toast.error(error.message);
      }

    }

   // useEffect(() => {
     // if(user.fullname.length > 0 && user.usertype.length > 0 && user.email.length > 0 && user.password.length > 0 && user.year_sem.length > 0){
       // setButtonDisabled(false);
      //}else{
        //setButtonDisabled(true);
      //}
    //})
    


    return(

      <div className="flex flex-col items-center justify-between">
       <div className="relative w-full ">
        <div className="absolute -z-10 w-screen ">
          <Image src={background} alt="background image" className="w-screen h-screen blur-sm"/>
          </div>
          </div>
          <div className="flex justify-center items-center h-screen ">
          <div className="max-w-400 mx-auto my-auto p-20 border border-gray-300 rounded-lg bg-f9f9f9 bg-blue-100 shadow-md">
            <h1 className="text-center mb-5 text-blue-500 font-bold text-3xl">Sign Up</h1>
          
        <h2 className="flex flex-col">
        <input
          className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center" type="text"
          name="fullname"
          placeholder="Fullname"
          value={user.fullname}
          onChange={(e) => setUser({...user,fullname: e.target.value})}
        />
      
        <select
            className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center"
            name="Usertype"
            value={user.usertype}
            onChange={(e) => setUser({...user,usertype: e.target.value})}
        >
            <option value="">Select Role</option>
            <option value="staff">Staff</option>
            <option value="student">Student</option>
        </select>
        
        {user.usertype === "student" && (
          <select
            className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center"
            name="year_sem"
            value={user.year_sem}
            onChange={(e) => setUser({...user, year_sem: e.target.value})}
         >
          <option value="">Select Year and Semester</option>
          <option value="option1">Year 3 Semester 1</option>
          <option value="option2">Year 3 Semester 2</option>
        </select>
        )}

        <input
          className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center" 
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({...user,email: e.target.value})}
        />
        
        <input
          className="mb-15 px-10 py-2 mb-5 border border-gray-300 rounded-lg text-gray-700 text-center" 
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({...user,password: e.target.value})}
        />
       
        <button onClick={onSignup} className=" px-5 py-2 bg-blue-500 text-white text-xl rounded-lg cursor-pointer hover:bg-blue-700 text-center font-bold" type="submit">Sign Up</button>
        </h2>
        <h6 className="text-blue-500"><center>Already have an Account?<u><Link href="/sign_in">Sign In</Link></u></center></h6>
        </div>
        </div>
        </div>
        
    )
}