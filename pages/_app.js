import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Head>
      <script src="https://kit.fontawesome.com/75cfbd6f8c.js" crossOrigin="anonymous"></script>
    </Head>  
  </>
}

export default MyApp
