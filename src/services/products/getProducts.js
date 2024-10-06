import axios from 'axios';

export const getProducts = async (url) => {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data)

        return data;

    } catch (error) {
        console.log(error);
    }
}