'use client';

import { useEffect, useState } from 'react';
// import UserForm from '../components/UserForm';
import UserForm from '@/components/UserForm';
import Link from 'next/link';
import { getAllUsers, deleteUser } from '@/services/userService';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Link href="/users/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</Link>
      <ul className="mt-4 space-y-2">
        {users.map((user: any) => (
          <li key={user._id} className="border p-4 rounded shadow">
            <p><strong>{user.user}</strong> ({user.age} yrs)</p>
            <p>{user.email}</p>
            <p>{user.mobile}</p>
            {/* <p>{Array.isArray(user.interest) ? user.interest.join(', ') : user.interest}</p> */}
            <p>{user.interest.join(', ')}</p>
            <div className="flex gap-2 mt-2">
              <Link href={`/users/${user._id}`} className="text-blue-600">View</Link>
              <Link href={`/users/add?id=${user._id}`} className="text-yellow-600">Edit</Link>
              <button onClick={() => handleDelete(user._id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
