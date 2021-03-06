import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from '../send'
import Message from '../message'

const MINS_DURATION = 240

const Messages = () => {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  )

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-400">
        <p> </p>
      </div>
    </div>
  )
}

export default Messages
