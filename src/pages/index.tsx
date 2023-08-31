import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import heroImg from '../../public/assets/hero.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>TSRNXT</title>
      </Head>

      <main className={styles.main}>

        <section className={styles.logoContent}>

            <Image
              className={styles.hero}
              alt="logo da página"
              src={heroImg}
              priority
            />

        </section>

          <h1 className={styles.title}>Aplicação criada para você organizar suas atividades</h1>

      </main>

      
    </>
  )
}
