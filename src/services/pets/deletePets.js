import axios from 'axios';

export const deletePets = async (url, id) => {
    try {
        await axios.delete(`${url}/${id}`).then((response) => {
            if (response.status === 200) {
                alert("Se ha eliminado la mascota de forma exitosa");
            }
        });
        
    } catch (error) {
        console.log(error)
    }
}