import axios from 'axios';
const url = "http://localhost:5000/meds";

export const viewMeds = () => axios.get(url);
export const createMed = newMed => axios.post(url, newMed);

export const updateMed = (id, updatedMed) => axios.patch(url + "/" + id, updatedMed);

export const deleteMed = (id) => axios.delete(url + "/" + id);
