import React, { useState, useEffect } from "react";
import "./AddCapital.css";
import { useDispatch, useSelector } from "react-redux";
import { addSalesProduct } from "../../Features/Sales/addSalesSlice";
import { getAllProducts } from "../../Features/Products/getAllOProductsSlice";
import CustomSpinner from "../CustomSpinner";
import { addCapital } from "../../Features/Capital/addCapitalSlice";
import { getAllCapital } from "../../Features/Capital/getAllCaptalSlice";

const AddCapital = () => {

//   const products = useSelector((state) => state.allProducts.data);
const [sales, setSales] = useState({
    month: "",
    monthNumber: "",
    advertisingCost: "",
    packagingCost: "",
    capital: '', 
  });
  const dispatch = useDispatch();
  const { loading, error,data } = useSelector((state) => state.addCapital);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCapital(sales));
    setSales({
      month: "",
    monthNumber: "",
    advertisingCost: "",
    packagingCost: "",
    capital: '',
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Only allow numeric input for advertisingCost and packagingCost
    if (name === "advertisingCost" || name === "packagingCost") {
      const parsedValue = parseFloat(value);
      const capital =
        (name === "advertisingCost" ? parsedValue : parseFloat(sales.advertisingCost) || 0) +
        (name === "packagingCost" ? parsedValue : parseFloat(sales.packagingCost) || 0);
  
      setSales((prevState) => ({
        ...prevState,
        [name]: isNaN(parsedValue) ? "" : parsedValue,
        capital: isNaN(capital) ? "" : capital.toFixed(2),
      }));
    } else {
      setSales((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };



  
  const isFormValid = sales.month !== "" && sales.advertisingCost !== "" && sales.packagingCost !== "";

  return (
    <div>
      <form className="container">
        <div className="textWrapper">
          <label className="labelName">Month</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="month"
            type="text"
            value={sales.month}
            placeholder="NGA2000"
            required
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Month Number</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="monthNumber"
            type="text"
            value={sales.monthNumber}
            placeholder="NGA35000"
   
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Advertising Cost</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="advertisingCost"
            type="text"
            value={sales.advertisingCost}
            placeholder="NGA5000"
        
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Packaging Cost</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="packagingCost"
            type="text"
            value={sales.packagingCost}
            placeholder="NGA5000"
        
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Capital</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="capital"
            type="text"
            value={sales.capital}
            disabled
            placeholder="NGA5000"
          
          />
        </div>
        <div className="btnContainer">
        
          <button  type="submit" onClick={handleSubmit} className="addButton" disabled={!isFormValid}>
        
            {loading ? <CustomSpinner />: "ADD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCapital;
