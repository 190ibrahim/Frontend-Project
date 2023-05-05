import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export async function fetchUsers() {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUser(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(newUser) {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, newUser);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(updatedUser) {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${updatedUser.id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteAllUsers() {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
