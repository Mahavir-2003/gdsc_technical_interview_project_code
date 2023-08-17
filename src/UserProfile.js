import { Button } from '@mui/material';
import React from 'react'

const UserProfile = ({data}) => {

  const handleResumeDownload = () => {
    // Simulate downloading the resume by creating a Blob and triggering a download
    const blob = new Blob([data.resume], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className='absolute top-0 left-0 z-40 w-screen h-screen bg-slate-200 flex justify-center items-center'>
        <div className=' w-1/2 h-full  flex flex-col justify-center items-center gap-y-1'>
            <img src={URL.createObjectURL(data.profilePicture)} alt="profilePicture" className=' w-52 h-52 rounded-full mb-10'/>
            <p className=' text-5xl font-semibold'>{data.name}</p>
            <p className=' text-xl '>{data.email}</p>
            <p className=' text-xl'>{data.phoneNumber}</p>
            <p className=' text-3xl mb-40'>{data.username}</p>
            <Button onClick={handleResumeDownload} variant='outlined' color="primary" className='w-1/3'>Download Resume</Button>
        </div>
    </div>
  );
}

export default UserProfile