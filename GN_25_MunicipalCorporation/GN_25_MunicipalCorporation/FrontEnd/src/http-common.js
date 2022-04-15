import axios from 'axios';
import jwtAuth from './jwtAuth';


export default axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {

        'content-Type': 'application/json',
        //  'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
    }
});