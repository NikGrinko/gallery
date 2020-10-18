import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberAlbum } from '../redux/actions/galleryActions';
const pathToBack = '/';
const childToHeaderButton = 'Выйти';
const titleToHeader = 'Ваши альбомы';

const Gallery = () => {
    const dispatch = useDispatch();
    const { albums, cover } = useSelector(({ gallery }) => gallery);
    console.log(cover)
    const setOpenAlbum = (id) => {
        dispatch(setNumberAlbum(id))
    }

    return (
        <div className='gallery'>
            <div className="container">
                <Header pathToBack={pathToBack} childToHeaderButton={childToHeaderButton} titleToHeader={titleToHeader} />
                <ul className='gallery__list'>
                    {albums.map((item, index) => (
                        <li onClick={() => setOpenAlbum(item.id)} key={item.id}>
                            <NavLink to={`/gallery/album${item.id}`} className='gallery__list-item'>
                                <div className="item-avatar">
                                    <img src={cover[index].url} alt="album avatar" />
                                </div>
                                <div className="item-name">{item.title}</div>
                                <div className="item-count">{cover[index].lenght}</div>
                            </NavLink>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Gallery;