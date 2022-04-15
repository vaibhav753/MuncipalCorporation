import axios from 'axios';

// export default axios.create({
//     baseURL: 'http://localhost:8080/',
//     headers: {
//         'content-Type': 'application/json',
//         "Authorization": `Bearer ${sessionStorage.getItem("token")}`
//     }
// });

export default function jwtAuth() {
    if (sessionStorage.getItem("tokenId" != null)) {
        return {
            'content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("tokenId")}`
        };
    } else {
        return {
            'content-Type': 'application/json',
        };
    }
}