import '../styles/globals.css'
import NavBar from '../Components/NavBar'
import TopBar from '../Components/TopBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar /> 
      <Component {...pageProps} />
        <TopBar />
    </div>
  )
}

export default MyApp
