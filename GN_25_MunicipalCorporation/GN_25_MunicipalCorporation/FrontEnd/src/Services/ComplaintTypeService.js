import httpClient from '../http-common';

const addComplaint = (data) => {
    return httpClient.post('addComplaint', data)
};

const getComplaintList=()=>{
    return httpClient.get('removeComplaint')
}

const getMainComplaint=()=>{
    return httpClient.get('removeComplaint/main')
}

const getComplaintTypes=()=>{
    return httpClient.get('addComplaint')
}

const deleteComplaintSubType=(id)=>{
    return httpClient.delete('removeComplaint/'+id);
}

const deleteMainComplaintType=(mainType)=>{
    return httpClient.delete('removeComplaint/main/'+mainType);
}

export default { addComplaint ,getComplaintList, getComplaintTypes, deleteComplaintSubType, deleteMainComplaintType, getMainComplaint};