import * as api from '../api';

export const viewMeds = async () => {
    try{
        const {data} = await api.viewMeds();
        return data;

    } catch(error){
        console.log(error);
    }
}
export const createMed = async (med) => {
    try{
        const {data} = await api.createMed(med);
        return data;

    } catch(error){
        console.log(error);
    }
}
export const updateMed = async (id, med) => {
    try{
        const {data} = await api.updateMed(id, med);
        return data;

    } catch(error){
        console.log(error);
    }
}
export const deleteMed = async (id) => {
    try{
        await api.deleteMed(id);

    } catch(error){
        console.log(error);
    }
}