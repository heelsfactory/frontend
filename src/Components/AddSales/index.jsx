import React, { useState, useEffect } from "react";
import "./AddSales.css";
import { useDispatch, useSelector } from "react-redux";
import { addSalesProduct } from "../../Features/Sales/addSalesSlice";
import { getAllProducts } from "../../Features/Products/getAllOProductsSlice";
import CustomSpinner from "../CustomSpinner";
import { getAllSales } from "../../Features/Sales/getAllSalesSlice";

const AddSales = () => {
  const products = useSelector((state) => state.allProducts.data);
  console.log({ products });
  const [sales, setSales] = useState({
    productId: "",
    quantity: "",
    moneyGot: "",
    transportationCost: "",
  });
  console.log({ sales });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.addSales);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log({ sales });
    dispatch(addSalesProduct(sales));
    setSales({
      productId: "",
    quantity: "",
    moneyGot: "",
    transportationCost: "",
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSales((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

 

  return (
    <div>
      <form className="container">
        <div className="textWrapper">
          <label className="labelName">Product</label> <br />
          <select
            onChange={handleChange}
            className="textInput"
            name="productId"
            value={sales.productId}
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>
        <div className="textWrapper">
          <label className="labelName">Quantity</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="quantity"
            type="text"
            value={sales.quantity}
            placeholder="NGA2000"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Money Got</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="moneyGot"
            type="text"
            value={sales.moneyGot}
            placeholder="NGA35000"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Transportation Cost</label> <br />
          <input
            onChange={handleChange}
            className="textInput"
            name="transportationCost"
            type="text"
            value={sales.transportationCost}
            placeholder="NGA5000"
          />
        </div>
        <div className="btnContainer">
          <button type="submit" onClick={handleSubmit} className="addButton">
            {loading ? <CustomSpinner /> : "ADD SALES"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSales;
