import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const pathToBack = '/gallery';
const childToHeaderButton = 'Перейти назад';
const titleToHeader = 'Нужный альбом';

const Album = () => {
    const { photo } = useSelector(({ gallery }) => gallery);

    return (
        <div className='album'>
            <div className='container'>
                <Header pathToBack={pathToBack}
                    childToHeaderButton={childToHeaderButton}
                    titleToHeader={titleToHeader} />

                <ul className="album__list">
                    {photo.map((item) => (
                        <li key={item.id} className='list-item'>
                            <div className="photo">
                                <img src={item.url} alt={item.title} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Album;