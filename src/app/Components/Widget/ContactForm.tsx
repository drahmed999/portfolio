"use client"
import React from 'react'

function ContactForm() {
  return (
    <div>
<form className='p-3 m-5 bg-slate-300 rounded-r-full '>
<fieldset className='border-2 border-black p-3 bg-slate-200'>
  <legend className='text-2xl font-extralight font-serif '>WANT TO ASK</legend>


<label htmlFor="Name" className='font-bold text-lg'>
  Name :

<input type='text'  width={25} className='m-2 border-black border-2  visible'/>
<br />
<br />

</label>

<label className='font-bold text-lg'>Email Address :<input type='email'width={100} className='border-2
 border-black mx-2 w-60 text-blue-950 cursor-wait' />
</label>
<br />
<br />
<label className=' flex items-center font-bold text-lg '>
  Type Your Message :
<textarea name="Message" id="" className=' p-2 m-2 border-2 border-black' ></textarea>
 
</label>
<div className='flex  justify-around'>
<button >
  <input type='submit' className='font-bold text-xl mt-7  px-4 py-2 rounded-2xl bg-red-400 hover:bg-red-900'/>
</button>
</div>
  
</fieldset>

</form>


    </div>
  )
}

export default ContactForm