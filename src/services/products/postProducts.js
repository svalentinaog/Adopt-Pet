import axios from 'axios';

export const postProducts = async (url, obj) => {
    try {
        await axios.post(url, obj)
            .then((response) => {
                console.log(response)
            })
    } catch (error) {
        alert(error.message);
    }
}