import axios from 'axios';

const API_URL = 'http://localhost:8001/ticket';

export async function getAllTickets() {
    return await axios.get(`${API_URL}/getAllTickets`);
}