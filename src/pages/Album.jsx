import React, { useState } from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
const pathToBack = '/gallery';
const childToHeaderButton = 'Перейти назад';

const Album = () => {
    const { photo, openAlbumName } = useSelector(({ gallery }) => gallery);
    const [sliderVisible, setsliderVisible] = useState(false)
    const [photoIndex, setphotoIndex] = useState(0)
    const openSlider = (index) => {
        setphotoIndex(index);
        setsliderVisible(!sliderVisible);
    }

    return (
        <div className='album'>
            <div className='container'>
                <Header pathToBack={pathToBack}
                    childToHeaderButton={childToHeaderButton}
                    titleToHeader={openAlbumName} />
                <ul className="album__list">
                    {photo.map((item, index) => (
                        <li onClick={() => openSlider(index)} key={item.id} className='list-item'>
                            <div className="photo">
                                <img src={item.url} alt={item.title} />
                            </div>
                        </li>
                    ))}
                </ul>
                {sliderVisible ? <Slider photoIndex={photoIndex} photo={photo} closeSlider={setsliderVisible} />
                    : <></>}
            </div>
        </div>
    )
}

export default Album;