import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ titleToHeader, pathToBack, childToHeaderButton }) => {
    return (
        <div className="header">
            <NavLink to={pathToBack} className='button button--gallery'>{childToHeaderButton}</NavLink>
            <h1 className='header-title'>{titleToHeader}</h1>
        </div>
    )
}
export default Header;