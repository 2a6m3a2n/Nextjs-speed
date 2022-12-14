import * as fs from 'fs'
import React, { useState } from 'react'

function Gallery({ imgs }) {
    const [img, setImg] = useState(imgs)
    const [viewImg, setViewImag] = useState()
    const [viewIndex, setViewIndex] = useState()

    const handleImage = (imgtitle, index) => {
        setViewImag(imgtitle)
        setViewIndex(index)
    }
    return (
        <>
        <h2 className='text-center text-4xl font-semibold my-6'>Our Memories</h2>
            {viewImg && <div  className="w-full h-full bg-red-50 fixed top-0 z-10 bg-opacity-60 pt-16 p-4 md:pt-0  md:flex justify-center items-center overflow-hidden">
                <img width={900} key={viewIndex} src={`/img/memories/${viewImg}`} alt="" srcSet="" />
                <button className='absolute text-red-400 font-bold text-3xl top-3 right-3' onClick={() => { setViewImag(null) }}>X</button>
            </div>}
            <div className="container flex items-center justify-center mx-auto cursor-pointer">
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 px-2 cursor-zoom-in'>
                    {img && img.map((imgtitle, index) => {
                        return (
                            <img key={index}  src={`/img/memories/${imgtitle}`} alt="" srcSet="" onClick={() => { handleImage(imgtitle, index) }} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    let imgs = await fs.promises.readdir('public/img/memories')
    console.log(imgs)
    return {
        props: { imgs }
    }
}

export default Gallery