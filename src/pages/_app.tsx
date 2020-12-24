import '../../styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  React.useEffect(() => {
    router.beforePopState((props) => {
      console.log(router.pathname)
      console.log(props)
      if (props.as.includes('admin')) {
        router.push('/')
        return false
      }
      return true
    })
  }, [])
  return (
    <>
      <nav>
        <h2>MENU</h2>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/contents'><a>Contents</a></Link></li>
          <li><Link href='/admin'><a>Admin</a></Link></li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
