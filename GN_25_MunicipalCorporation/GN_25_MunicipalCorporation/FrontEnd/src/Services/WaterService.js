import httpClient from '../http-common';

const getWaterRecords = (waterId) => {
    return httpClient.get('water/' + waterId);
};

const updateWaterRecords = (waterId)=> {
    return httpClient.put('water/'+waterId);
};

const getWaterRecordsByEmail = (email) => {
    return httpClient.get('water/current/'+email);
};

export default { getWaterRecords, updateWaterRecords, getWaterRecordsByEmail };