import Image from 'next/image'
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
            {viewImg && <div className="w-full h-96 bg-black fixed top-60 md:top-40 z-10 bg-opacity-70 flex justify-center items-center overflow-hidden">
                <Image key={viewIndex} width={300} height={250} src={`/img/${viewImg}`} alt="" srcSet="" />
                <button className='absolute text-white font-bold text-3xl top-3 right-3' onClick={() => { setViewImag(null) }}>X</button>
            </div>}
            <div className="container flex items-center justify-center mx-auto">
                <div className='grid grid-cols-3 gap-1 px-2 '>
                    {img && img.map((imgtitle, index) => {
                        return (
                            <Image key={index} width={300} height={250} src={`/img/${imgtitle}`} alt="" srcSet="" onClick={() => { handleImage(imgtitle, index) }} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    let imgs = await fs.promises.readdir('public/img')
    // const allimgs =  imgs.json()
    console.log(imgs)
    return {
        props: { imgs }
    }
}

export default Gallery