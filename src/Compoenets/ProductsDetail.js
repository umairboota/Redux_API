import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../actions";
import LoaderComponenet from "./LoaderComponent";

const ProductsDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, image, category, description, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  // console.log(productId);
  const fettchProductDetail = async () => {
    //GET request
    try {
      const response = await axios.get(
        ` https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProducts(response.data));
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    if (productId && productId !== "") fettchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return (
    <>
    <div className="container mt-4">
      {product? (
        <div className="row">
          <div className="col-md-6">
            <img src={image} style={{ height: "40rem" }} alt="...Loading" />
          </div>
          <div className="col-4 col-md-4">
            <h3 className="text-secondary mt-4">
              {id}.{title}
            </h3>
            <div className="mt-4">
              <h6 className="text-success">Category: {category}</h6>
            </div>
            <div className="mt-4">
              <h5>Description*</h5>
              <p>{description}</p>
              <h6 className="text-secondary">Price: ${price}</h6>
            </div>
            <div className="mt-4">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  Add to cart
                </button>
                <button className="btn btn-success" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ):(<LoaderComponenet/>)}
    </div>
    </>
  );
};

export default ProductsDetail;
