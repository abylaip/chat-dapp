import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from '../avatar'
import ChangeUsername from '../change'

const Header = () => {
  const { user } = useMoralis()
  return (
    <div className="sticky top-0 z-50 bg-white py-5 shadow-2xl">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-32 w-32">
          <Avatar logoutOnPress />
        </div>
        <ChangeUsername>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
        </ChangeUsername>
        <p className="text-xs font-thin">
          (Нажми на имя чтобы поменять ее или на аватарку чтобы выйти)
        </p>
      </div>
    </div>
  )
}
//
//<ChangeUsername />
//<h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>

export default Header
