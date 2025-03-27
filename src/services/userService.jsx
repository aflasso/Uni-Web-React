import axios from "axios";

const API_URL =  "http://localhost:3000/users";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const getUsers = async () =>
{
    try {
        const response = await apiClient.get("/");
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al obtener usuarios");
    }

}

const getUser = async (id) =>
{
    try {
        const response = await apiClient.get(`/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al obtener usuarios");
    }
}

const createUser = async (user) =>
{
    try {
        const response = await apiClient.post("/", user);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al obtener usuarios");
    }
}

const updateUser = async (id, user) =>
{
    try {
        const response = await apiClient.put(`/${id}`, user);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al obtener usuarios");
    }
}

const deleteUser = async (id) =>
{
    try {
        const response = await apiClient.delete(`/${id}`);
        return {message: "User deleted"};
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al obtener usuarios");
    }
}

export {getUsers, getUser, createUser, updateUser, deleteUser};