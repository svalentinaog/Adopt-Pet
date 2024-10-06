import axios from 'axios';

export const putProducts = async (url, productId, obj) => {
    try {
        const response = await axios.put(`${url}/${productId}`, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;

        console.log("Datos obtenidos del servidor", data);

    } catch (error) {
        console.error("Error al actualizar el producto:", error);
    }
};