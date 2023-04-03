import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { db } from '../firebase'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchWorkers = async () => {
      const res = await db.collection('Workers').get();
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    };

    const fetchServices = async () => {
      const res = await db.collection('Services').get();
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    };

    const fetchDailyServices = async () => {
      const res = await db.collection('DailyServices').get();
      console.log(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    };

    fetchWorkers();
    fetchServices();
    fetchDailyServices();
  }, []);


  return (
    <>
      <Head>
        <title>Elis Ian Salon: Point of Sale</title>
        <meta name="description" content="Elis Ian Salon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
