'use client';

import { useEffect, useState } from 'react';
import { getAllUsers } from '@/services/userService';
import { useRouter } from 'next/navigation';
import styles from './detail.module.css';
import Link from 'next/link';

export default function DetailViewPage() {
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getAllUsers();
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detailed View</h2>

      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user._id} className={styles.card}>
            <h3 className={styles.cardTitle}>{user.user ? `${user.user} Details` : 'User Details'}</h3>
            <div className={styles.row}><strong>Name:</strong> {user.user}</div>
            <div className={styles.row}><strong>Interests:</strong> {user.interest}</div>
            <div className={styles.row}><strong>Age:</strong> {user.age}</div>
            <div className={styles.row}><strong>Mobile:</strong> {user.mobile}</div>
            <div className={styles.row}><strong>Email:</strong> {user.email}</div>

            <div className={styles.btnWrap}>
              <Link href={`/add-user?id=${user._id}`} className={styles.editBtn}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
