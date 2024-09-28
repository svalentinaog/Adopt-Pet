import axios from 'axios';

export const deleteProducts = async (url, id) => {
    try {
        await axios.delete(`${url}/${id}`).then((response) => {
            response &&
            response.ok &&
            alert("Se ha eliminado el producto de forma exitosa")
        })
    } catch (error) {
        console.log(error)
    }
}