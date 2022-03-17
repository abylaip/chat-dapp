import { useMoralis } from 'react-moralis'
import Login from '../components/login'
import Header from '../components/header'
import Messages from '../components/messages'

const Home = () => {
  const { isAuthenticated } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-pink-400 to-fuchsia-800">
      <div className="container">
        <Header />
        <Messages />
      </div>
    </div>
  )
}

export default Home
