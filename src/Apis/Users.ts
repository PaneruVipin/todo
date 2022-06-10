import axios from "axios"

 const BASE_RANDOMUSER_API= 'https://randomuser.me/api/'

export  const getStudent= async() =>{
   const response= await axios.get(BASE_RANDOMUSER_API+ '?results=2')
   return response.data
 }



