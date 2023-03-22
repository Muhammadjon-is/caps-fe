import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer/Footer';
import ProductCard from './OurStore/ProductCard';

const HomeSecreen = () => {
  const { keyword, pageNumber } = useParams();  
  window.scrollTo(0, 0);

  return (
    <div>
        <ProductCard keyword={keyword} pageNumber={pageNumber}/>
        <Footer/>
    </div>
  )
}

export default HomeSecreen