import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Home() {
  const router = useRouter()
  React.useEffect(() => {
    router.beforePopState((props) => {
      console.log(props)
      if (props.as.includes('admin')) {
        return false
      }
      return true
    })
  }, [])
  return (
    <div>
      <nav>
        <ul>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}
