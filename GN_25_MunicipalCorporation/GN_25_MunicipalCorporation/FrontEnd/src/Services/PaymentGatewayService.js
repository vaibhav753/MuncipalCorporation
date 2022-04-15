import httpClient from '../http-common';

const setPayment = ()=> {
    return httpClient.post('payment_gateway');
};

export default { setPayment };