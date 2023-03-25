import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer/Footer";
import OurStore from "./OurStore/OurStore";
import ProductCard from "./OurStore/ProductCard";
const HomeSecreen = () => {
  const { keyword, pagenumber } = useParams();
  window.scrollTo(0, 0);

  return (
    <div>
<OurStore/>
      <ProductCard keyword={keyword} pagenumber={pagenumber} />
      <Footer />
    </div>
  );
};

export default HomeSecreen;
