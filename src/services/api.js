import axios from "axios"

export const api = axios.create( {
  baseURL: "https://api-debtor-customers.onrender.com"
  
})