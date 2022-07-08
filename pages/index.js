import Head from 'next/head';

//components
import { client } from '../lib/client';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Product from '../components/Product';


export default function Home({ products }) {
  return (
    <div>
      <>
        <Nav />
      </>

      <Banner />
      {/* shop section */}
      <div className='shop-container'>
        <h1 className='section-title'>
          Shop
        </h1>
        <div className='products-container'>
          {products?.map(
            (product) => <Product key={product._id} product={product} />)}
        </div>
      </div>



    </div>

  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);



  return {
    props: { products }
  }
}
