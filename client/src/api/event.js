import axios from "axios";

const API_URL = "http://localhost:8004/event";

export async function getAllEvents() {
  return await axios.get(`${API_URL}/getAll`);
}

export async function createEvent(event) {
    return await axios.post(`${API_URL}/create`, event);
}

export async function getById(id){
    return await axios.get(`${API_URL}/getById?id=${id}`);
}

export async function getByOrganizerId(organizer){
    return await axios.get(`${API_URL}/organizer?organizerId=${organizer}`);
}

export async function getByCategory(category){
    return await axios.get(`${API_URL}/category?category=${category}`);
}

export async function update (event, id){
    return await axios.put(`${API_URL}/update?id=${id}`, event);
}

export async function deleteEvent(id){
    return await axios.delete(`${API_URL}/delete?id=${id}`);
}