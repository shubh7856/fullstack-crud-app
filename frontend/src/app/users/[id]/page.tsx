'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getUserById } from '@/services/userService';

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUserById(id as string).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{user.user}</h2>
      <p>{user.email}</p>
      <p>{user.mobile}</p>
      <p>{user.interest.join(', ')}</p>
      <p>{user.age} years</p>
    </div>
  );
}
