import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './OurStore/ProductCard';

const HomeSecreen = () => {
    window.scrollTo(0, 0);
    const keyword = useParams()
    const pageNumber = useParams();
  return (
    <div>
        <ProductCard keyword={keyword} pageNumber={pageNumber}/>
    </div>
  )
}

export default HomeSecreen