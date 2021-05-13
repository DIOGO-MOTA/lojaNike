import { CgMathPlus } from "react-icons/cg";
import Link from 'next/link';

import styles from './styles.module.scss';


export function Summary() {

  return (

    <main className={styles.contentContainer}>


      <section className={styles.card}>
        <div>
          <img src="/images/nike.png" alt="nike" />
        </div>

        <div>
          <header>
            <p>NIKE ZOOM AIR</p>
          </header>
          <strong>$250</strong>
        </div>

        <Link href="/Cart" >
          <CgMathPlus className={styles.icon} />
        </Link>

      </section>

      <section className={styles.card}>
        <div>
          <img src="/images/1.png" alt="nike" />
        </div>

        <div>
          <header>
            <p>NIKE ZOOM AIR</p>
          </header>
          <strong>$250</strong>
        </div>

        <Link href="/Cart" >
          <CgMathPlus className={styles.icon} />
        </Link>

      </section>

      <section className={styles.card}>
        <div>
          <img src="/images/3.png" alt="nike" />
        </div>

        <div>
          <header>
            <p>NIKE ZOOM AIR</p>
          </header>
          <strong>$250</strong>
        </div>

        <Link href="/Cart" >
          <CgMathPlus className={styles.icon} />
        </Link>

      </section>

      <section className={styles.card}>
        <div>
          <img src="/images/4.png" alt="nike" />
        </div>

        <div>
          <header>
            <p>NIKE ZOOM AIR</p>
          </header>
          <strong>$250</strong>
        </div>

        <Link href="/Cart" >
          <CgMathPlus className={styles.icon} />
        </Link>

      </section>




    </main>
  )
}