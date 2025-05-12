import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/users';

export const getAllUsers = async () => axios.get(API_BASE);
export const getUserById = async (id: string) => axios.get(`${API_BASE}/${id}`);
export const createUser = async (data: any) => axios.post(API_BASE, data);
export const updateUser = async (id: string, data: any) => axios.put(`${API_BASE}/${id}`, data);
export const deleteUser = async (id: string) => axios.delete(`${API_BASE}/${id}`);
// export const getAllUsers = async () => axios.get('http://localhost:5000/api/users');
// export const createUser = async (data: any) =>
//     axios.post('http://localhost:5000/api/users', data);
  
