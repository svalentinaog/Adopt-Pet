import axios from 'axios';

export const getPets = async (url) => {
    try {
        const response = await axios.get(url);
        const data = await response.json();
        console.log(data)

        return data;

    } catch (error) {
        console.log(error);
    }
}