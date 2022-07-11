import React from 'react';
import Link from 'next/link';
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
    return (
        <div className='nav'>
            <p className='logo'>
                <Link href='/'>Ahoy</Link>
            </p>
            <button type='button' className='nav-cart' onClick="">
                <BsFillBagFill />
                <span className='cart-item-qty'>1</span>
            </button>
        </div>
    )
}

export default Nav