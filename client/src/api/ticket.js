import axios from 'axios';

const API_URL = 'http://localhost:8001/ticket';

export async function getAllTickets() {
    return await axios.get(`${API_URL}/getAllTickets`);
}

export async function createTicket(ticket) {
    return await axios.post(`${API_URL}/createTicket`, ticket);
}

export async function getById(id){
    return await axios.get(`${API_URL}/getById?id=${id}`);
}

export async function getByEventId(eventId){
    return await axios.get(`${API_URL}/getByEventId?eventId=${eventId}`);
}