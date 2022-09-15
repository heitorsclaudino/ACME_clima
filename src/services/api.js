import axios from "axios";

//rotas: 
// Home  : /
// Tempo: ?woeid=${id}


const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1'
})

export default api;