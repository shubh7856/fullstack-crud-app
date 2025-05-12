import styles from './page.module.css';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.heading}>CRUD Application</h1>

        <Link href="/add-user" className={styles.primaryBtn}>
          Add User
        </Link>

        <Link href="/list-view" className={styles.outlineBtn}>
          List View
        </Link>
      </div>
    </div>
  );
}
