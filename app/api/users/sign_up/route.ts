import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {fullname,usertype,email,password,year_sem} = reqBody
        
        let yearSemester:string|null;

        // Check if the user is staff
        if (usertype === "staff") {
            yearSemester = null;
        } else {
            const yearSemesterMap:Record<string,string> = {
                option1: "Year 3 Sem 1",
                option2: "Year 3 Sem 2",
        };
  
        // Get the real name for the year_sem value
        yearSemester = yearSemesterMap[year_sem];
      }



        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)
        
        const newUser = new User({
            fullname,
            usertype,
            email,
            password:hashedPassword,
            year_sem:yearSemester,
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        })
    }

    catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
        
    }
    
}