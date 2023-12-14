import React from 'react'
import Image from 'next/image'

const DevImg = ({ContainerStyle, ImgSrc}: {ContainerStyle: string, ImgSrc: string}) => {
  return (
    <div className={ContainerStyle}>
        <Image src={ImgSrc}  fill priority alt='Dev Image'/>
    </div>
  )
}

export default DevImg