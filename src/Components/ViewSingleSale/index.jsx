import React, {useState, useEffect} from "react";
import "./SingleSale.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllSales } from "../../Features/Sales/getAllSalesSlice";

const ViewSaleDetails = ({ id }) => {
  const dispatch = useDispatch()
    const data = useSelector((state) => state.allSales.data);
    const matchedProduct = data.find((product) => product._id === id);
//   if (!matchedProduct) {
//     // Handle the case when no matching product is found
//     return <div>No product found with the given ID</div>;
//   }


  const { productName, moneyGot, quantity, initialQuantity, transportationCost,productImage } = matchedProduct;

  return (
    <div className="container">
      
      <div>
        <div className="textContainer">
          <label className="textLabel">Product Name:</label>
          <p className="text">{productName}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Money Got:</label>
          <p className="text">GHC{moneyGot}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Quantity:</label>
          <p className="text">{quantity}</p>
        </div>
       
        <div className="textContainer">
          <label className="textLabel">Transportation Cost:</label>
          <p className="text">GHC{transportationCost}</p>
        </div>
       
        
      </div>
    </div>
  );
};

export default ViewSaleDetails;
