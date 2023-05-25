import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

import Link from 'next/link'

interface Card{
    cardImg:StaticImageData,
    cardName:string,
    cardLink:string,
}

const ProjectCards:FC<Card>=({cardImg,cardName,cardLink})=> {
  return (
    <div className=' mt-5 bg-pink-700 inline-flex flex-grow items-center flex-row border-5 border-black rounded-lg'>
        <div>
<Image src={cardImg}  alt='' height={1200} width={
    300
} className='m-5 rounded-3xl' />
        </div>
        {/* text */}
        <div className=' flex-col border-black border-w mx-5'>
            <div className=' text-2xl font-bold justify-start flex top-2  underline'>
{cardName}
            </div>
            <div className=''>
                <button className='bg-red-300 font-bold text-lg py-2 my-7 tracking-wider rounded-2xl px-16 hover:bg-black text-white duration-700'>
                  <Link href={cardLink} target='_blank ' rel="noopener noreferrer">
                           Visit
            
                  
                  </Link>  
                </button>
            </div>

        </div>



    </div>
  )
}

export default ProjectCards