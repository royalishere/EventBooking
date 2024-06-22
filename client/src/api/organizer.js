import axios from "axios";

const API_URL = "http://localhost:8002/organizer";

export async function createOrganizer(organizer) {
  return await axios.post(`${API_URL}/create`, organizer);
}

export async function getById(id) {
  return await axios.get(`${API_URL}/getById?id=${id}`);
}

export async function getByUserId(userId) {
  return await axios.get(`${API_URL}/getByUserId?userId=${userId}`);
}

export async function update(organizer, id) {
  return await axios.put(`${API_URL}/update?id=${id}`, organizer);
}

export async function updateStatus(id, status) {
  return await axios.put(`${API_URL}/updateStatus?id=${id}&status=${status}`);
}