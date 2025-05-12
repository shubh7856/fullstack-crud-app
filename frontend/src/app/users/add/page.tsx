'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';
import { createUser, getUserById, updateUser } from '@/services/userService';

export default function AddUserPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(res => setInitialData(res.data));
    }
  }, [userId]);

  const handleSubmit = async (data: any) => {
    if (userId) {
      await updateUser(userId, data);
    } else {
      await createUser(data);
    }
    router.push('/users');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{userId ? 'Edit User' : 'Add User'}</h1>
      <UserForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
}

export const dynamic = 'force-dynamic';

