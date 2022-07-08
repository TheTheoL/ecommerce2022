import React from 'react';
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
    return (
        <div className='nav'>
            <p className='logo'>Ahoy</p>
            <p className='nav-cart'>
                <BsFillBagFill />
            </p>
        </div>
    )
}

export default Nav