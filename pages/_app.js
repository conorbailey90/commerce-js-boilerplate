import { CartProvider } from '../context/cart'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </CartProvider>
  )
}

export default MyApp
