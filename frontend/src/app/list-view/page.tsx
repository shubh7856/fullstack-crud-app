'use client';

import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '@/services/userService';
import { useRouter } from 'next/navigation';
import styles from './list.module.css';
import Link from 'next/link';

export default function ListViewPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      setUsers(res.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      alert('Error deleting user');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.backIcon} onClick={() => router.push('/')}>←</span>
          <h2 className={styles.title}>List View</h2>
        </div>

        <div className={styles.buttonRow}>
          <Link href="/add-user" className={styles.primaryBtn}>Add User</Link>
          <Link href="/detail-view" className={styles.outlineBtn}>Detail View</Link>
        </div>

        <div className={styles.table}>
          {users.map((user) => (
            <div key={user._id} className={styles.row}>
              <span>{user.user}</span>
              <div className={styles.actions}>
                <Link href={`/add-user?id=${user._id}`} className={styles.editBtn}>Edit</Link>
                <button onClick={() => handleDelete(user._id)} className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
