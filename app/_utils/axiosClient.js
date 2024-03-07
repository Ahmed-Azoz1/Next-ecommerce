const {default:axios} = require('axios') // import axios

const apikey=process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl='https://strapi-api-app-h58t.onrender.com/api';


const axiosClient = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apikey}`
    }
})



export default axiosClient