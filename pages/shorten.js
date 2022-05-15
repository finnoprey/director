import Head from 'next/head'
import { useState, useEffect } from 'react'

import styles from '../styles/Shorten.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Director - Shortener</title>
        <meta name="description" content="Redirect management application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Shortener</h1>
        <form className={styles.form}>
          <input className={styles.url} type="text" name="url" />
          <button className={styles.button}>
            Go
          </button>
        </form>
      </div>
    </div>
  )
}