const {default:axiosClient} = require('./axiosClient')


const addToCart = (payload)=>axiosClient.post('/carts',payload)

const getUserCartItems = (email)=>axiosClient.get(`/carts?populate[products][populate]=Banner&filters[email][$eq]=${email}`)

// deleted item in cart
const deleteCartItem = (item)=>axiosClient.delete(`/carts/${item}`)

export default {addToCart,getUserCartItems,deleteCartItem}