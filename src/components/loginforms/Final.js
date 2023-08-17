import React, { useEffect, useState } from "react";
import UserProfile from "../../UserProfile";
import { getAllUsers } from "../../userData"; // Import the function to get all users
import { Button } from "@mui/material";

const Final = ({ values  }) => {
    const userData = getAllUsers();
    console.log(userData);
    const [user, setUser] = useState(null);

    const handleResumeDownload = () => {
      // Simulate downloading the resume by creating a Blob and triggering a download
      const blob = new Blob([user.resume], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      URL.revokeObjectURL(url);
    };

    // find user from userData array with email
    useEffect(() => {
       // find data Asyncronously
        const findUser = async () => {
            const user = await userData.find((user) => user.email === values.email);
            setUser(user);
        };
        findUser();
    }, [userData, values.email]);


    if(user){
    if(user.password === values.password) {
      return (
        <div className='absolute top-0 left-0 z-40 w-screen h-screen bg-slate-200 flex justify-center items-center'>
        <div className=' w-1/2 h-full  flex flex-col justify-center items-center gap-y-1'>
            <p className=' text-5xl font-semibold'>{user.name}</p>
            <p className=' text-xl '>{user.email}</p>
            <p className=' text-xl'>{user.phoneNumber}</p>
            <p className=' text-3xl mb-40'>{user.username}</p>
            <Button onClick={handleResumeDownload} variant='outlined' color="primary" className='w-1/3'>Download Resume</Button>
        </div>
    </div>
      );
    }
  }
  

  return <div className="w-screen h-screen absolute top-0 left-0 z-40 bg-slate-200 flex flex-col justify-center items-center gap-y-10">
    <h1 className="text-5xl text-red-500">Wrong Password !</h1>
    <Button href="/login" variant='outlined' className="w-1/5" color="primary" >Try Again</Button>
    </div>;
};

export default Final;
