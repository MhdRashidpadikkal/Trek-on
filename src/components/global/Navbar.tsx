import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {

    const links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Features',
            link: '/features'
        },
        {
          name: 'Gallery',
          link: '/gallery'
        },
        {
          name: 'About',
          link: '/about'
        }  
    ]
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-[#A367B1] to-[#5D3587]  py-3 px-4 '>
        <div>
          <Image 
          src="/images/logo.png"  
          alt="Logo" width={200} height={100} />
        </div>
        <div className='flex gap-3 text-[20px] font-medium text-white  '>
          {
            links.map((item, index) => (
              <Link 
              key={index} href={`${item.link}`} >
                 <span className="hover:text-[#A367B1]">{item.name}</span>
              </Link>
            ))
          }
        </div>
    </div>
  )
}
