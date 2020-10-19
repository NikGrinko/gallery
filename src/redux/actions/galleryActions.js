import { jsonPlaceholderApi } from '../../api/api';
const GET_ALBUM = 'GET_ALBUM';
const SET_PHOTO = 'SET_PHOTO';
const SET_NUMBER_ALBUM = 'SET_NUMBER_ALBUM';
const GET_COVER = 'GET_COVER';
export const getAlbumUserAction = () => (dispatch) => {

    jsonPlaceholderApi.getAlbum()
        .then((response) => {
            dispatch(setAlbum(response.data))
        })
}
export const getAlbumCoverAction = () => (dispatch) => {
    jsonPlaceholderApi.getPhotos()
        .then((response) => {
            dispatch(getCover(response.data))
        })
}
export const setNumberAlbum = (data) => (dispatch) => {

    dispatch({
        type: SET_NUMBER_ALBUM,
        payload: data
    })

    jsonPlaceholderApi.getPhotos()
        .then((response) => {
            dispatch(setPhoto(response.data))
        })
}
const getCover = (cover) => ({
    type: GET_COVER,
    payload: cover
})
const setPhoto = (photo) => ({
    type: SET_PHOTO,
    payload: photo
})
const setAlbum = (album) => ({
    type: GET_ALBUM,
    payload: album
})