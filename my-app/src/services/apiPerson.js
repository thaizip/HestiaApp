import axios from "axios"; 

const apiPerson= axios.create({
    baseURL: "http://localhost:8081",
})

export default apiPerson;