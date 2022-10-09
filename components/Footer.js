import React from 'react'

function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container mx-auto px-5 py-10 flex lg:items-center justify-between lg:flex-row lg:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
                        <a className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900">
                            <img style={{ width: "26rem" }} src={"img/speedLogo.png"} alt="" srcSet="" />
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Providing Engineering Solution for Nation Building</p>
                        <h2 className='font-semibold text-lg pt-3 '>GD Goenka University, Gurugram, GD GOENKA UNIVERSITY, Sohna - Gurgaon Road, Sohna, Haryana</h2>
                    </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.1053042297513!2d77.06234335073718!3d28.264823607292804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df73812c16b%3A0x458f4ebb5de0cf33!2sGD%20Goenka%20University%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1665318348321!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='lg:w-2/3 w-full h-56'></iframe>
                </div>
            </footer>

        </>
    )
}

export default Footer