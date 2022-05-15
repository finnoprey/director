import Head from 'next/head'
import { supabase } from '../utils/supabaseClient'
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Director - Dashboard</title>
        <meta name="description" content="Redirect management application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}