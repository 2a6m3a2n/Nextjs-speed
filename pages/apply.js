/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

function apply() {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)

    return (
        <>
            <section className="text-black-600 body-font relative">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-900">Do Participate with Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Organized by School of Engineering and Sciences, GD Goenka University, Sohna, Gurugram, Haryana.</p>
                    </div>
                    <form action="submit" method="POST">
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-black-600">Team Representative<span className='text-red-500'>*</span></label>
                                        <input required type="text" id="Lname" name="Lname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-black-600">Email<span className='text-red-500'>*</span></label>
                                        <input required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="title" className="leading-7 text-sm text-black-600">Project Title<span className='text-red-500'>*</span></label>
                                        <input required type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative ">
                                        <label htmlFor="message" className="leading-7 text-sm text-black-600">Name of the University/College/School<span className='text-red-500'>*</span></label>
                                        <input required type="text" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="participants" className="leading-7 text-sm text-black-600">No. of Participants / Teams ( Maximum : 6 )<span className='text-red-500'>*</span></label>
                                        <input required type="number" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="title" className="leading-7 text-sm text-black-600">Name of ( All Participants )<span className='text-red-500'>*</span></label>
                                        <input required type="text" id="Aname" name="Aname" placeholder='Separated by "/"' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="title" className="leading-7 text-sm text-black-600">Email ID of ( All Participants )<span className='text-red-500'>*</span></label>
                                        <input required type="text" id="Aname" name="Aname" placeholder='Separated by "/"' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-black-600">Mobile No. ( All Participants )<span className='text-red-500'>*</span></label>
                                        <input required type="text" placeholder='Separated by "/"' id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="Transaction" className="leading-7 text-sm text-black-600">Transaction Mode<span className='text-red-500'>*</span></label>
                                        <div className="items-center mb-4">
                                            <input required id="default-radio-1" type="radio" value="" onClick={() => { setCheck(true), setCheck2(false) }} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700" />
                                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-black-900">UPI</label>
                                            {check && <img className='w-44 py-3' src="img/payment.jpeg" alt="" srcSet="" />}
                                        </div>
                                        <div className="items-center">
                                            <input  required id="default-radio-2" type="radio" value="" onClick={() => { setCheck2(true), setCheck(false) }} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700" />
                                            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-black-900">Bank Transfer</label>
                                            {check2 && <img className='w-60 py-3' src="img/bank.png" alt="" srcSet="" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7  text-sm text-black-600">Transaction ID / Receipt Number<span className='text-red-500'>*</span></label>
                                        <input required type="number" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7  text-sm text-black-600">Payment Screenshot<span className='text-red-500'>*</span></label>
                                        <input required className="py-3 w-full text-sm text-gray-900" id="file_input" type="file" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <a><button type='submit' className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button></a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default apply