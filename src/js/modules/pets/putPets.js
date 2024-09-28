import axios from 'axios';

export const putPets = async (url, petId, obj) => {
    try {
        const response = await axios.put(`${url}/${petId}`, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;

        console.log("Datos obtenidos del servidor", data);

    } catch (error) {
        console.error("Error al actualizar mascota:", error);
    }
};