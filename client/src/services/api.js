import axios from 'axios'

export const apiClient = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 1500
})