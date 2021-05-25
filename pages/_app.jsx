import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('process.env.MY_VAR', process.env.MY_VAR);
  return <Component {...pageProps} />
}

export default MyApp
