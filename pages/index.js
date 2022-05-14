import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Director</title>
        <meta name="description" content="Redirect management application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        
        <h1 className={styles.title}>Director</h1>
        <p className={styles.description}>By <Link href="/github">Finn O&apos;Prey</Link></p>
      </div>
    </>
  )
}
