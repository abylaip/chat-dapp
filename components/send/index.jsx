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
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl space-x-3">
      <input
        type="text"
        className="w-full rounded-lg border-2 border-purple-700 py-2 px-3 outline-none"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        onClick={sendMessage}
        className="rounded-lg bg-purple-700 px-7 font-bold text-white hover:bg-purple-600"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
