import httpClient from '../http-common';

const getPropertyRecords = (propertyId) => {
    return httpClient.get('property/'+propertyId);
};

const getPropertyRecordsByEmail = (email) => {
    return httpClient.get('property/current/'+email);
};

const updatePropertyRecords = (propertyId)=> {
    return httpClient.put('property/'+propertyId);
};

export default { getPropertyRecords, updatePropertyRecords, getPropertyRecordsByEmail };