import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../actions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fatchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fatchProducts();
  }, []);
  return <ProductComponent />;
};

export default ProductListing;
