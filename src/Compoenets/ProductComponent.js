import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./LoaderComponent";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.products);
  const rederList = products?.map((product) => {
    const { id, image, title, category, price } = product;
    return (
      <div className="card mt-2" key={id}>
        <Link to={`/products/${id}`}>
          <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
          <p className="card-text text-secondary">${price}</p>
          <p className="card-text text-success">{category}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="containter text-center mt-4">Feature Products...</h2>
      <br />
      
      {products?(<div className="container">
        <div className="row">
          <div className="col mt-2">{rederList}</div>
          <div className="col mt-2">{rederList}</div>
          <div className="col mt-2">{rederList}</div>
        </div>
      </div>):(<Loader/>)}
    </>
  );
};

export default ProductComponent;
