'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getUserById } from '@/services/userService';
import styles from './form.module.css';

export default function AddUserForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [formData, setFormData] = useState({
    user: '',
    age: '',
    email: '',
    mobile: '',
    interest: '',
  });

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (id) {
      getUserById(id).then((res) => {
        const user = res.data;
        setFormData({
          user: user.user || '',
          age: user.age || '',
          email: user.email || '',
          mobile: user.mobile || '',
          interest: Array.isArray(user.interest)
            ? user.interest.join(', ')
            : user.interest || '',
        });
      });
    }
  }, [id]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: any) => {
    e.preventDefault();

    const newErrors: any = {};
    if (!formData.user.trim()) newErrors.user = 'Name is required';
    if (!formData.age || isNaN(Number(formData.age))) newErrors.age = 'Age must be a number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile must be 10 digits';
    if (!formData.interest.trim()) newErrors.interest = 'At least one interest required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const payload = {
      ...formData,
      interest: formData.interest.split(',').map((i) => i.trim()),
    };

    sessionStorage.setItem('userFormData', JSON.stringify(payload));

    if (id) {
      router.push(`/add-user/confirm?id=${id}`);
    } else {
      router.push('/add-user/confirm');
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <form className={styles.formBox} onSubmit={handleSave}>
        <div className={styles.topRow}>
          <span className={styles.backIcon} onClick={() => router.push('/')}>←</span>
          <h2 className={styles.title}>User Form</h2>
        </div>

        <label>Name</label>
        <input
          className={styles.input}
          name="user"
          value={formData.user}
          onChange={handleChange}
        />
        {errors.user && <p style={{ color: 'red' }}>{errors.user}</p>}

        <label>Interests</label>
        <input
          className={styles.input}
          name="interest"
          value={formData.interest}
          onChange={handleChange}
        />
        {errors.interest && <p style={{ color: 'red' }}>{errors.interest}</p>}

        <label>Age</label>
        <input
          className={styles.input}
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

        <label>Mobile</label>
        <input
          className={styles.input}
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

        <label>Email</label>
        <input
          className={styles.input}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveBtn}>Next</button>
          <button type="button" className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}