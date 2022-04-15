import httpClient from "../http-common";

const addUser = (data) => {
    return httpClient.post('registration', data);
}

export default { addUser }
