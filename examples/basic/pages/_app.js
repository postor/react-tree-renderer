// import App from 'next/app'
import Link from 'next/link'

const pages = {
  basic: '/index',
  'update self': '/update-self',
  'add child': '/add-child',
  'delete self': '/delete-self',
  'update parent': '/delete-self',
  'use event': '/use-event',
}

let aStyle = {
  border: '1px solid black',
  margin: '0 10 px'
}

function MyApp({ Component, pageProps }) {
  return <div>
    {Object.keys(pages).map(k => (<Link
      key={k}
      href={pages[k]}
    ><a style={aStyle}>{k}</a></Link>))}
    <hr />
    <Component {...pageProps} />
  </div>
}

export default MyApp