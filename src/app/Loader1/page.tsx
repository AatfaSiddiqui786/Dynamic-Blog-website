'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../Loader1/Page.module.css'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <div className={styles.loader}>Loading...</div>
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.name}>AATFA SIDDIQUI</h1>
        <button className={styles.button} onClick={() => setShowWelcome(true)}>
          Look at my website
        </button>
      </div>
      {showWelcome && (
        <div className={styles.welcome}>
          <h2>Welcome to my website</h2>
          <Link href="/Landing">
            <button className={styles.button}>Open</button>
          </Link>
        </div>
      )}

    
    </main>
  )
}