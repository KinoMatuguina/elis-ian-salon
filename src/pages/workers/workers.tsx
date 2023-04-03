import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { db } from '@/firebase';
import { useEffect } from 'react';

export default function Workers({ data }: any) {
    useEffect(() => {
      console.log(data);
    }, [])
    return (
        <>
      <Head>
        <title>Elis Ian Salon: Point of Sale</title>
        <meta name="description" content="Elis Ian Salon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Workers
      </main>
    </>
    )
}

export async function getStaticProps() {
  // Fetch data from external API
  const fetchWorkers = async () => {
    const res = await db.collection('Workers').get();
    return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const data = await fetchWorkers()

  // Pass data to the page via props
  return { props: { data } }
}