import Head from "next/head";
import { Summary } from "../components/Summary";


import styles from './home.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>teste</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.text1} >
          <h1>JUST <br /> DO <br />IT</h1>
          <p>
            Lorem Ipsum is simply dummy text  <br />
          and typesetting industry.
          </p>
        </section>

        <img src="/images/2.png" alt="nike" />


        <section className={styles.text2} >
          <h1>NIKE ZOOM AIR</h1>

          <span>
            $260
          </span>
        </section>

      </main>

      <Summary />


    </>

  )
}