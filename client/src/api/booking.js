import axios from 'axios';

const API_URL = 'http://localhost:8001/booking history';

export async function getAllBookingHistories() {
    return await axios.get(`${API_URL}/getAll`);
}

export async function createBookingHistory(bookingHistory) {
    return await axios.post(`${API_URL}/booking`, bookingHistory);
}

export async function cancelBooking(id){
    return await axios.get(`${API_URL}/cancel?id=${id}`);
}

export async function confirmPayment(id){
    return await axios.get(`${API_URL}/confirmPayment?id=${id}`);
}

export async function getRevenueByEventId(eventId){
    return await axios.get(`${API_URL}/getEventRevenue?eventId=${eventId}`);
}

export async function getByUserId(userId){
    return await axios.get(`${API_URL}/getByUserId?userId=${userId}`);
}