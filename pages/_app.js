import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
  <SessionProvider session={pageProps.session}> 
      <Component {...pageProps} />
  </SessionProvider>
  )
  
}


export default MyApp
