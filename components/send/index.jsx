import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (res) => {
          // successs
        },
        (error) => {
          console.log(error)
        }
      )

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })

    setMessage('')
  }

  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl space-x-5 rounded-full bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        type="text"
        className="flex-grow bg-transparent text-white outline-none"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-yellow-500"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
