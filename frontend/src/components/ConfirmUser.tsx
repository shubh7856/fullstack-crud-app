'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUser, updateUser } from '@/services/userService';
import styles from '@/app/add-user/confirm/confirm.module.css';

export default function ConfirmUser() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('userFormData');
    if (data) {
      setFormData(JSON.parse(data));
    } else {
      router.push('/add-user');
    }
  }, [router]);

  const handleSave = async () => {
    try {
      if (id) {
        await updateUser(id, formData);
      } else {
        await createUser(formData);
      }
      sessionStorage.removeItem('userFormData');
      router.push('/');
    } catch (err) {
      alert('Email already exists or failed to save user');
    }
  };

  if (!formData) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Confirm User Details</h2>
      <div className={styles.card}>
        <div className={styles.row}><strong>Name:</strong> {formData.user}</div>
        <div className={styles.row}><strong>Interests:</strong> {formData.interest}</div>
        <div className={styles.row}><strong>Age:</strong> {formData.age}</div>
        <div className={styles.row}><strong>Email:</strong> {formData.email}</div>
        <div className={styles.row}><strong>Mobile:</strong> {formData.mobile}</div>
        <div className={styles.buttonWrap}>
          <button className={styles.doneBtn} onClick={handleSave}>Done</button>
        </div>
      </div>
    </div>
  );
}
