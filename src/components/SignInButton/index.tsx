import { FiShoppingBag } from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton() {

  return (
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => { }}
      >
        <FiShoppingBag/>
      </button>

  )
}