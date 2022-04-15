import httpClient from '../http-common';
import axios from 'axios';
import jwtAuth from '../jwtAuth';

const registerComplaint = (data) => {
    return httpClient.post('complaints', data)
};

const getMainComplaints = () => {
    return httpClient.get('complaints')

};

const getSubComplaints = (mainComplaint) => {
    return httpClient.get('complaints' + '/' + mainComplaint)
}

const getComplaints = () => {
    return httpClient.get('complaintslist')
}

const getComplaintdetails = (id) => {

    return httpClient.get('complaintdetails/' + id)
}

const rejectUserComplaint = (id) => {

    return httpClient.put('complaintrejected/' + id)
}

const updateStatusToCompleted = (id) => {
    return httpClient.put('approveComplaints/' + id)
}

const getApprovedComplaints = () => {
    return httpClient.get('approveComplaints')
}

const getRejectedComplaints = () => {
    return httpClient.get('complaintrejected')
}

const revertRejectComplaint = (id) => {

    return httpClient.put('complaintreverted/' + id)
}

const removeUserComplaint = (id) => {

    return httpClient.delete('approveComplaints/' + id)
}

const getUserComplaints = () => {

    return httpClient.get('usercomplaintslist')
}




export default { getUserComplaints, removeUserComplaint, revertRejectComplaint, getRejectedComplaints, updateStatusToCompleted, getApprovedComplaints, rejectUserComplaint, registerComplaint, getMainComplaints, getSubComplaints, getComplaints, getComplaintdetails };