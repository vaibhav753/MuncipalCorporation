import httpClient from '../http-common';

const addHODRecords = (data) => {
    return httpClient.post('HODlist', data)
};

const getHODDetails=()=>{
    return httpClient.get('HODlist')
}

const removeHOD=(id)=>{
    return httpClient.delete('HODlist/'+id);
}

export default { addHODRecords ,getHODDetails,removeHOD};