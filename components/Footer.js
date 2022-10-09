import Link from 'next/link';
import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { GrLocation } from 'react-icons/gr';
import { FiArrowRightCircle } from 'react-icons/fi';

function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font shadow-lg shadow-black mt-12  overflow-hidden">
                <div className="container mx-auto px-5 py-10 flex lg:items-center lg:flex-row lg:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
                        <a className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900">
                            <img style={{ width: "26rem" }} src={"img/speedLogo.png"} alt="" srcSet="" />
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Providing Engineering Solution for Nation Building</p>
                        <h2 className='font-semibold text-lg pt-3 '>GD Goenka University, Gurugram, GD GOENKA UNIVERSITY, Sohna - Gurgaon Road, Sohna, Haryana</h2>
                    </div>
                    <div className="w-72 mx-auto flex-shrink-0 text-center lg:ml-20 py-3 lg:text-left">
                        <h2 className='text-lg font-bold mb-3'>Contact Us</h2>
                        <BsTelephone className='inline-flex text-center mr-2' />9354998801
                        <div className='pt-2 '>
                            <SiGmail className='m-1 inline-flex text-center' />guptaaman9036@gmail.com
                        </div>
                        <div className='inline-flex text-lg pt-2 font-semibold'>
                            <GrLocation className='m-1 inline-flex text-center' /><Link href="https://goo.gl/maps/1bfUN4eSmrmksXan9"><a>How to reach campus<FiArrowRightCircle className='ml-1 inline-flex ' /></a></Link>
                        </div>
                    </div>
                    <div className="w-72 mx-auto flex-shrink-0 text-center py-3 lg:text-left">
                        <h2 className='text-lg font-bold mb-3'>Student Co-ordinators</h2>
                        <div className="inline-flex">
                            -Aman Kr. Gupta (BCA)
                        </div>
                        <div>
                            -Ankit Agrawal (BCA)
                        </div>
                        <div>
                            -Prashant (BCA)
                        </div>
                        <div>
                            -Kapil (BCA)
                        </div>
                    </div>
                    <div className="w-72 mx-auto flex-shrink-0 text-center py-3 lg:text-left">
                        <h2 className='text-lg font-bold mb-3'>Faculty Co-ordinators</h2>
                        <div className="inline-flex">
                            -DR. Neeta singh
                        </div>
                        <div>
                            -MS. Sapna Pandey.
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer