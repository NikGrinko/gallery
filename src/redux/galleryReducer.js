const GET_ALBUM = 'GET_ALBUM';
const SET_PHOTO = 'SET_PHOTO';
const SET_NUMBER_ALBUM = 'SET_NUMBER_ALBUM';
const GET_COVER = 'GET_COVER';
const initialState = {
    loading: false,
    albums: [],
    photo: [],
    cover: [{
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952"
    }],
    openAlbum: null
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUM:

            return {
                ...state,
                albums: action.payload.filter((item) => item.userId === 1)
            };
        case GET_COVER:
            const getArr = action.payload.filter((item) => item.albumId <= 10)
            const newArr = [];

            function search(nameKey, myArray) {
                for (let i = 0; i < myArray.length; i++) {
                    if (getArr[i].albumId === nameKey) {
                        return myArray[i];
                    }
                }
            }
            for (let k = 1; k <= 10; k++) {
                newArr.push(search(k, getArr))
            }

            return {
                ...state,
                cover: newArr
            }
        case SET_PHOTO:
            return {
                ...state,
                photo: action.payload.filter((item) => item.albumId === state.openAlbum)
            }
        case SET_NUMBER_ALBUM:
            return {
                ...state,
                openAlbum: action.payload
            };
        default:
            return state
    }

}
export default galleryReducer;