'use client';

import { useState } from 'react';

export default function UserForm({ initialData = {}, onSubmit }: any) {
  const [formData, setFormData] = useState({
    user: initialData.user || '',
    age: initialData.age || '',
    email: initialData.email || '',
    mobile: initialData.mobile || '',
    interest: initialData.interest?.join(', ') || '',
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      setEmailValid(validateEmail(value));
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    if (!emailValid) return;

    const payload = {
      ...formData,
      age: parseInt(formData.age),
      interest: formData.interest.split(',').map((i: string) => i.trim()),
    };
    onSubmit(payload);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={submitForm}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Form
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <div className="relative">
            <input
              name="user"
              placeholder="Enter name"
              value={formData.user}
              onChange={handleChange}
              className="w-full p-2 pr-8 border rounded"
              required
            />
            {formData.user && (
              <span className="absolute top-2.5 right-2 text-green-600"></span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Age *
          </label>
          <div className="relative">
            <input
              name="age"
              type="number"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 pr-8 border rounded"
              required
            />
            {formData.age && (
              <span className="absolute top-2.5 right-2 text-green-600"></span>
            )}
          </div>
        </div>
        <div className="mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 pr-8 border rounded ${
                !emailValid ? 'border-red-500' : ''
              }`}
              required
            />
            {formData.email && (
              <span className="absolute top-2.5 right-2">
                {emailValid ? (
                  <span className="text-green-600"></span>
                ) : (
                  <span className="text-red-600"></span>
                )}
              </span>
            )}
          </div>
        </div>
        {!emailValid && (
          <p className="text-sm text-red-600 mb-3">Email format is incorrect.</p>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile *
          </label>
          <div className="relative">
            <input
              name="mobile"
              type="number"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 pr-8 border rounded"
              required
            />
            {formData.mobile && (
              <span className="absolute top-2.5 right-2 text-green-600"></span>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Interests (comma separated)
          </label>
          <div className="relative">
            <input
              name="interest"
              placeholder="e.g., Comics, Sports"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-2 pr-8 border rounded"
            />
            {formData.interest && (
              <span className="absolute top-2.5 right-2 text-green-600"></span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
