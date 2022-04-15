import httpClient from '../http-common';

const navigateToComplaints = () => {
    return httpClient.get('navigatetocomplaints')

};

export default { navigateToComplaints };