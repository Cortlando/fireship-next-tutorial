import Image from 'next/image'
import styles from './page.module.css'
import {getServerSession} from "next-auth"
import {redirect} from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()


  return (
    <main>
    </main>
  )
}
