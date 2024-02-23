const {default:axios} = require('axios') // import axios

const apikey=process.env.NEXT_PULBIC_REST_API_KEY;
const apiUrl='http://localhost:1337/api';


const axiosClient = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization:`Beara ${apikey}`
    }
})



export default axiosClient