import React from 'react'
import { useMoralis } from 'react-moralis'

const ChangeUsername = ({ children }) => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()}) `
    )
    if (!username) return

    setUserData({ username })
  }

  return (
    <button
      onClick={setUsername}
      disabled={isUserUpdating}
      className="hover:text-black"
    >
      {children}
    </button>
  )
}

export default ChangeUsername
