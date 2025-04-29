import Image from 'next/image'
import React from 'react'
import TypeAnimation from '../global/TypeAnimation'

export const Hero: React.FC = () => {
    return (
        <div className='flex h-[450px] bg-gradient-to-l from-[#fae2ec] to-100% to-[#e5e3e8] '>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='w-[80%] '>
                    <h2 className='text-5xl font-semibold text-[#392467] '>
                        <span className='text-[#5D3587] text-4xl font-normal'>Plan Your</span><br /> Next Adventure </h2>
                    <TypeAnimation />
                    <p className='mt-5'>
                        Trek-on makes travel planning simple, fun, and collaborative. Join with your friends, organize trips, and make every journey unforgettable.
                    </p>
                    <div className='flex gap-2 mt-4 font-medium'>
                        <button className='bg-[#5D3587] text-white hover:bg-[#392467] px-6 py-2 rounded-full cursor-pointer '>Start Planning</button>
                        <button className='border-2 border-[#5D3587] text-[#392467]  px-6 py-2 rounded-full cursor-pointer '>Explore Sample Trips</button>
                    </div>
                    <div className='flex gap-3 mt-10'>
                        <div className='flex flex-col items-center shadow-lg px-4 rounded-xl cursor-pointer '>
                            <span className='text-[#5D3587] font-semibold text-3xl'>15K+</span>  Trips Planned
                        </div>
                        <div className='flex flex-col items-center shadow-lg px-4 rounded-xl cursor-pointer'>
                            <span className='text-[#5D3587] font-semibold text-3xl'>8K+</span>  Happy Travelers
                        </div>
                        <div className='flex flex-col items-center shadow-lg px-4 rounded-xl cursor-pointer'>
                            <span className='text-[#5D3587] font-semibold text-3xl'>120+</span>  Destinations Explored
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 relative  '>

                {/* Rating */}
                <div className='absolute left-25 bottom-10 flex flex-col items-center justify-center px-5 py-1 bg-white/80 backdrop-blur-sm shadow-md rounded-2xl z-40 '>
                    <span className='text-yellow-400 text-2xl'>★ ★ ★ ★ ★</span>
                    <span className='font-semibold leading-5'>4.8/5</span>
                    <span className='font-medium leading-5'>Loved by Travelers</span>
                </div>

                {/* image section */}
                <div className='mb-10 flex items-center justify-center relative z-30 '>
                    <Image
                        src="/images/trip-get-ready.png"
                        width={450}
                        height={100}
                        alt='Get-ready'
                    />
                </div>
                <div className='absolute w-[350px] h-[350px] bg-[#5D3587] top-10 rounded-full left-44 blur-[110px] '></div>

               {/* icons */}
                <div className='flex animate-pulse items-center shadow-2xl px-2 pr-5 bg-white h-[40px] rounded-xl absolute top-25 right-15 z-30 '>
                    <span className='relative   '>
                        <Image
                            src="/images/icon-1.png"
                            width={40}
                            height={40}
                            alt='icon-1'
                        />
                    </span>
                    <span className='font-semibold '>Explore the World</span> <br />
                </div>

                <div className='flex animate-bounce items-center shadow-2xl px-2 pr-5 bg-white h-[50px] rounded-xl absolute top-60 right-5 z-30 '>
                    <span>
                        <Image
                            src="/images/icon-2.png"
                            width={50}
                            height={50}
                            alt='icon-2'
                        />
                    </span>
                    <span className='font-semibold '>Pack Your Bags</span>
                </div>

                
            </div>
        </div>
    )
}
