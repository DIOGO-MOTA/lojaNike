import React from 'react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter()
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="https://seeklogo.com/images/N/Nike-logo-0C7C6020A9-seeklogo.com.png" alt="" />
        <nav>
          <Link href="/" >
            <a className={asPath === '/' ? styles.active : ''}>Men</a>
          </Link>
          <Link href="/Women" prefetch>
            <a className={asPath === '/Women' ? styles.active : ''}>Women</a>
          </Link>
          <Link href="/Kid" prefetch>
            <a className={asPath === '/Kid' ? styles.active : ''}>Kid</a>
          </Link>

        </nav>

        <div>
          <SignInButton />
        </div>

      </div>
    </header>
  )
}