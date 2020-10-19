import React, { useEffect, useRef, useState } from 'react';



let position = 0;

const Slider = ({ photo, closeSlider, photoIndex }) => {
    const [leftDisabledArrow, setleftDisabledArrow] = useState(false);
    const [rightDisabledArrow, setrightDisabledArrow] = useState(false);
    const [positionState, setStatePosition] = useState(0)
    const track = useRef();


    useEffect(() => {
        position = photoIndex * (-789);
        setPosition();
    }, [])

    useEffect(() => {
        if (position >= 0) {
            setleftDisabledArrow(true)
        } else {
            setleftDisabledArrow(false)
        }

    }, [positionState])
    useEffect(() => {
        if (position < (photo.length - 1) * -789) {
            setrightDisabledArrow(true)
        } else {
            setrightDisabledArrow(false)
        }

    }, [positionState])



    const leftSlide = () => {
        position += 790;
        setStatePosition(position)
        setPosition();
    }

    const rightSlide = () => {
        position -= 790;
        setStatePosition(position)
        setPosition();
    }

    const setPosition = () => {
        track.current.style.transform = `translateX(${position}px)`;
    };


    return (
        <div className='slider'>
            <div className="slider-wrapper">
                <div onClick={() => closeSlider()} className='slider__close'>
                    <div className="slider__close-wrapper">
                        <span className="slider__close-item item-1"></span>
                        <span className="slider__close-item item-2"></span>
                    </div>
                </div>
                <button disabled={leftDisabledArrow} onClick={leftSlide} className="slider__arrow arrow-left">
                    <span className='arrow-element arrow-left-1'></span>
                    <span className='arrow-element arrow-left-2'></span>
                </button>
                <button disabled={rightDisabledArrow} onClick={rightSlide} className="slider__arrow arrow-right">
                    <span className='arrow-element arrow-right-1'></span>
                    <span className='arrow-element arrow-right-2'></span>
                </button>
                <div className="slider__frame">
                    <div ref={track} className="slider__track">
                        {photo.map(item => (
                            <div key={item.id} className="slider__item">
                                <img src={item.url} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider;