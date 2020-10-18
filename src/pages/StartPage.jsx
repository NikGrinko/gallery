import React from 'react';
import videoBackground from '../media/intro.mp4';
import { NavLink } from 'react-router-dom';
const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro__media'>
                <video muted loop autoPlay >
                    <source src={videoBackground} />
                </video>
            </div>
            <div className='intro__content'>
                <h1 className='intro__content-title'>Gallery</h1>
                <NavLink to='/gallery' className='intro__content-button'><div className="svg-wrapper">
                    <svg height="80" width="300" xmlns="http://www.w3.org/2000/svg">
                        <rect id="shape" height="80" width="300" />
                    </svg>
                    <div id="text">
                        Let`s go
                        </div>
                </div></NavLink>
            </div>
        </div>
    )
}
export default Intro;