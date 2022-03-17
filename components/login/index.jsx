import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black text-white">
      <h1>I am the login screen</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold text-black"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
