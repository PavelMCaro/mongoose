import { axiosAjax } from '../../../../config/axios';

const url = 'http://localhost:3000/author'

export const service = {
    async get() {
        try {
            const { data } = await axiosAjax.get(url);
            console.log('GET', data);
        } catch(e) {
            throw new Error(e.message);
        }
    },

    async post(formData) {
        try {
            const { data } = await axiosAjax.post(url, formData)
            console.log('POST', data);
        } catch(e) {
            console.log(e);
        }
    }
}
