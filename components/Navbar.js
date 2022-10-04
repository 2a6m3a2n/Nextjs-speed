import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

function Navbar() {
    return (
        <>
            <Marquee gradient={false} speed={100} className="bg-red-500 font-semibold text-white" behavior="" direction="left">Coming Soon</Marquee>
            <header className="text-gray-600 body-font">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img style={{ width: "26rem" }} src={"img/speedLogo.png"} alt="" srcSet="" />
                        <p className='text-sm'>Providing Engineering Solution for Nation Building</p>
                    </a>
                    <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center`}>
                        <Link href={'/'}><a className="mr-5 hover:text-red-500 text-black text-base font-semibold hover:border-b-2 hover:border-red-700">Home</a></Link>
                        <Link href={'/award'}><a className="mr-5 hover:text-red-500 text-black text-base font-semibold hover:border-b-2 hover:border-red-700">Best Award</a></Link>
                        <Link href={'/prize'}><a className="mr-5 hover:text-red-500 text-black text-base font-semibold hover:border-b-2 hover:border-red-700">Prize</a></Link>
                        <Link href={'/contact'}><a className="mr-5 hover:text-red-500 text-black text-base font-semibold hover:border-b-2 hover:border-red-700 ">Contact Us</a></Link>
                    </nav>
                    <Link href={'/apply'}>
                        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none bg-red-600 rounded text-base mt-4 md:mt-0 text-white">Apply Now
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar