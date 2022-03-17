import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="p0DygO64V2SNb4R7sT6cwerRPwvAJ7nj8X9MhLai"
      serverUrl="https://mpbtsl4qtc7h.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
