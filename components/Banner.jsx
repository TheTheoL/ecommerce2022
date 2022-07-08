import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='intro'>
        <h1>The best way</h1>
        <h1>to shop professional</h1>
        <h1>photography equipment.</h1>
      </div>
      <div className='intro-p'>
        <p>
          Ahoy is a one-stop shop for everything you need
        </p>

        <p>to unleash your inner photographer.</p>
      </div>
      <div className='buttons'>
        <Link href="#shop">
          <button className='shop-button'>
            Shop
          </button>
        </Link>
        <Link href="#about">
          <button className='about-button'>
            About
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Banner