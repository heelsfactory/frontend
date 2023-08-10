import React, {useState, useEffect} from "react";
import "./ViewCapitalDetails.css";
import { useDispatch, useSelector } from "react-redux";


const ViewCapitalDetails = ({ id }) => {

  const dispatch = useDispatch()
    const data = useSelector((state) => state.allCapital.data);
    const matchedProduct = data.find((product) => product._id === id);
//   if (!matchedProduct) {
//     // Handle the case when no matching product is found
//     return <div>No product found with the given ID</div>;
//   }


  const { month, monthNumber, advertisingCost, packagingCost, capital } = matchedProduct;

  return (
    <div className="container">
      <div className="img-container">
        <img src="path/to/your/image.png" alt="Product" />
      </div>
      <div>
        <div className="textContainer">
          <label className="textLabel">Month:</label>
          <p className="text">{month}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Month Number:</label>
          <p className="text">{monthNumber}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Advertising Cost:</label>
          <p className="text">{advertisingCost}</p>
        </div>
       
        <div className="textContainer">
          <label className="textLabel">Packaging Cost:</label>
          <p className="text">{packagingCost}</p>
        </div>
        <div className="textContainer">
          <label className="textLabel">Capital:</label>
          <p className="text">{capital}</p>
        </div>
       
        
      </div>
    </div>
  );
};

export default ViewCapitalDetails;
