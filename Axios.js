import axios from 'axios'

// Define default headers for all requests
const defaultHeaders = {
    'Accept': 'application/json',
}

// Create an instance of axios
let Axios = axios.create({
    headers: defaultHeaders,
})

// Request interceptor - the following config will be applied for all the requests
// Use it attach common info like Tokens
Axios.interceptors.request.use((config) => {
    const token = "sample token" // get it from localStorage/cookie
    config.headers.Authorization = token ? `Bearer ${token}` : null
    return config
}) 

// Response interceptor - every response - successful and failure - comes to the below code
// Use it handle errors globally, redirections based on status code
Axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if(error.response.status === 401) {
        window.location.href = '/login'
    } else {
        //show popup with appropriate message
    }
})  

// Use the modified instance of axios - "Axios" to get the benefit of predefined config
export default Axios
