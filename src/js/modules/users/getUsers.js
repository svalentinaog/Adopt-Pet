import axios from 'axios';

export const getUsers = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}