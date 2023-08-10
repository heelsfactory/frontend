import React, {useState, useEffect} from "react";
import "./ViewProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Features/Products/getAllOProductsSlice";

const ViewProductDetails = ({ id }) => {
  const dispatch = useDispatch()
    const data = useSelector((state) => state.allProducts.data);
    const matchedProduct = data.find((product) => product._id === id);
//   if (!matchedProduct) {
//     // Handle the case when no matching product is found
//     return <div>No product found with the given ID</div>;
//   }


  const { productName, costPrice, quantity, initialQuantity, profitExpected, quantityLeft, unitPrice,productImage } = matchedProduct;

  return (
    <div className="container">
      <div className="img-container">
        <img src={productImage} alt="Product" className="img-p" />
      </div>
      <div>
        <div className="textContainer">
          <label className="textLabel">Product Name:</label>
          <p className="text">{productName}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Cost Price:</label>
          <p className="text">GHC{costPrice}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Quantity:</label>
          <p className="text">{quantity}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Initial Quantity:</label>
          <p className="text">{initialQuantity}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Profit Expected:</label>
          <p className="text">GHC{profitExpected}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Quantity left:</label>
          <p className="text">{quantityLeft}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Unit Price:</label>
          <p className="text">GHC{unitPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetails;
