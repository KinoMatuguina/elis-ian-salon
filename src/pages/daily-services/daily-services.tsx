import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { db } from '@/firebase';

export default function DailyServices({ data }: any) {
  
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
            Daily Services
          </main>
        </>
    )
}


export async function getStaticProps() {
  // Fetch data from external API
  const fetchWorkers = async () => {
    const res = await db.collection('Services').get();
    return res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const data = await fetchWorkers()

  // Pass data to the page via props
  return { props: { data } }
}