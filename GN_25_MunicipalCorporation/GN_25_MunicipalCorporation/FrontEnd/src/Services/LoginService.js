import httpClient from '../http-common';


const getUser = () => {
    return httpClient.get('userlogin')

};

const validateUser = (data) => {
    return httpClient.post('userlogin', data)
}

export default { getUser, validateUser };