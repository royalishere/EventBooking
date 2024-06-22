import axios from "axios";

const API_URL = "http://localhost:8002/user";

export async function getAllUsers() {
    return await axios.get(`${API_URL}/getAll`);
}

export async function createUser(user) {
    return await axios.post(`${API_URL}/create`, user);
}

export async function getById(id) {
    return await axios.get(`${API_URL}/getById?id=${id}`);
}

export async function getUserByEmail(email) {
    return await axios.get(`${API_URL}/getByEmail?email=${email}`);
}

export async function updateUser(user, id) {
    return await axios.put(`${API_URL}/update?id=${id}`, user);
}
