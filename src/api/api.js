import axios from 'axios';
export const jsonPlaceholderApi = {
    getAlbum() {
        return axios
            .get('https://jsonplaceholder.typicode.com/albums')
    },
    getPhotos() {
        return axios
            .get('https://jsonplaceholder.typicode.com/photos')
    }
}
