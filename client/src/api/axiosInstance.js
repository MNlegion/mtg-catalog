import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/auth",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        // Other header content if needed
    },
});

export default instance;