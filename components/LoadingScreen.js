import React from 'react'
import Image from 'next/image'
import TruckBois from '/public/images/TruckBois.gif'

const LoadingScreen = () => {
  return <Image src={TruckBois} className="h-auto max-w-full" />
}

export default LoadingScreen
