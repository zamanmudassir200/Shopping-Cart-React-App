import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setErrMsg(error.message);
    }
  };
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  if (loading) {
    return (
      <div className="h-[calc(100vh-70px)] flex w-full justify-center items-center">
        <Circles height={"60"} width={"60"} color={"red"} visible={true} />
      </div>
    );
  }
  if (errMsg !== null) {
    return (
      <div className="">
        Error occured! <span>{errMsg}</span>
      </div>
    );
  }
  return (
    <div className="px-2">
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
        {products && products.length
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
