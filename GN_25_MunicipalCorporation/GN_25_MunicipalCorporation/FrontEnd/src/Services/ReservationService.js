import axios from 'axios';
import httpClient from '../http-common';

const createReservation = (data) => {
  return httpClient.post('reservations', data);
};
export default { createReservation };
