import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-100">
      <div className="w-6/12 space-y-10 rounded-xl bg-white p-10 shadow-2xl">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">CHAT DAPP для Тюленчат</p>
          <p>(надеюсь Али хорошо сдал экономику)</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={authenticate}
            className="animate-bounce rounded-lg bg-purple-600 py-3 px-20 font-bold text-white shadow-xl"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
