/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState()

  useEffect(() => {
    setServerUrl(roomId)
  }, [roomId])
  // ...
  return <div className="">{serverUrl}</div>
}
export default ChatRoom
