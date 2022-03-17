import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from '../avatar'
import ChangeUsername from '../change'

const Header = () => {
  const { user } = useMoralis()
  return (
    <div className="sticky top-0 z-50 border-b-2 border-yellow-300 bg-blue-700 p-5 text-yellow-500 shadow-sm">
      <div className="item-end grid grid-cols-5 lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-2 border-yellow-500 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the METAVERSE CHAT</h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
