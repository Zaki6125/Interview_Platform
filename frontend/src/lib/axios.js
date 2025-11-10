import axios from 'axios'

const axoisInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // es field ka mtlab hai browser send kre ga cookies automatically her single request per
});
export default axoisInstance