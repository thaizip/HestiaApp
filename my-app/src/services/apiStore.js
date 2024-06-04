import axios from "axios"; 

const apiStore= axios.create({
    baseURL: "http://localhost:8082",
})

export default apiStore;