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

        <section>
          <h1 className={styles.title}>Aplicação criada para você organizar suas atividades</h1>
        </section>

        <div className={styles.infoContent}>

          <section className={styles.box}>
              <span>+12 posts</span>
          </section>

          <section className={styles.box}>
              <span>+71 coments</span>
          </section>

        </div>


      </main>

      
    </>
  )
}
