import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavigateBtns = () => {
    const navigate = useNavigate()
   function backClicked(){
    console.log("back");
    navigate(-1)
   }
   function nextClicked(){
    console.log("next");
    navigate("/")

   }
  return (
    <div className='flex justify-between m-4'>
        <button className='border-2 py-2 px-5 rounded ' onClick={backClicked}>Back</button>
        <button className='border-2 py-2 px-5 rounded ' onClick={nextClicked}>Back to home</button>
    </div>
  )
}

export default NavigateBtns