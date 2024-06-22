import axios from "axios";

const API_URL = "http://localhost:8003/feedback";

export async function createFeedback(feedback) {
    return await axios.post(`${API_URL}/create`, feedback);
}

export async function getByUserId(userId) {
    return await axios.get(`${API_URL}/getByUserId?userId=${userId}`);
}

export async function getByEventId(eventId) {
    return await axios.get(`${API_URL}/getByEventId?eventId=${eventId}`);
}

export async function getAllFeedback() {
    return await axios.get(`${API_URL}/getAll`);
}

export async function deleteFeedback(id) {
    return await axios.delete(`${API_URL}/delete?id=${id}`);
}

export async function changeRating(feedback) {
    return await axios.put(`${API_URL}/changeRating`, feedback);
}

export async function answerFeedback(feedback) {
    return await axios.put(`${API_URL}/answer`, feedback);
}