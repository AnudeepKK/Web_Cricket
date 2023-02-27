import axios from "axios";
const getWorkshop =async () => {
    const response= await axios.get(`https://workshops-server.herokuapp.com/workshops`)
    
    return response.data;
    
}
 
export {
    getWorkshop
};