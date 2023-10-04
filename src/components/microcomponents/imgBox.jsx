import { useState } from "react"

export default function ImgBox({ img, gif, url, project }) {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true)
    }
    const handleMouseLeave = () => {
        setIsHovering(false)
    }
    return (
        <>
            <a className='relative hover:scale-105 transition-transform duration-300' href={url} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={`${isHovering ? gif : img}`} alt="proyecto1" className='w-72 h-48 object-cover' />
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/[0.9] opacity-0 hover:opacity-70 border border-light'>
                    <h3 className='text-2xl text-light font-primary font-bold w-3/4'>{project}</h3>
                </div>
            </a>
        </>
    )
}