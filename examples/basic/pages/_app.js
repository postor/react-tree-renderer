// import App from 'next/app'
import Link from 'next/link'

const pages = {
  basic: '/',
  'update self': '/update-self',
  'add child': '/add-child',
  'delete self': '/delete-self',
  'update parent': '/update-parent',
  'event': '/event',
  'add/update/delete in one':'/add-update-delete'
}

let aStyle = {
  border: '1px solid black',
  margin: '0 10px',
  display: 'inline-block'
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