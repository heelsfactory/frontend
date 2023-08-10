import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Features/Products/addProductsSlice";
import CustomSpinner from "../Components/CustomSpinner";

const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [profitExpected, setProfitExpected] = useState("");
  const [productImage, setProductImage] = useState(null); // State to store the file

  const { loading } = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("unitPrice", unitPrice);
    formData.append("costPrice", costPrice);
    formData.append("profitExpected", profitExpected);
    formData.append("productImage", productImage);

    dispatch(addProduct(formData));
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="textWrapper">
          <label className="labelName">Product Name</label> <br />
          <input
            onChange={(e) => setProductName(e.target.value)}
            className="textInput"
            name="productName"
            type="text"
            placeholder="Enter product name"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Unit Price</label> <br />
          <input
            onChange={(e) => setUnitPrice(e.target.value)}
            className="textInput"
            name="unitPrice"
            type="text"
            placeholder="GHC2000"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Cost Price</label> <br />
          <input
            onChange={(e) => setCostPrice(e.target.value)}
            className="textInput"
            name="costPrice"
            type="text"
            placeholder="GHC35000"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Profit Expected</label> <br />
          <input
            onChange={(e) => setProfitExpected(e.target.value)}
            className="textInput"
            name="profitExpected"
            type="text"
            placeholder="GHC5000"
          />
        </div>
        <div className="textWrapper">
          <label className="labelName">Product Image</label> <br />
          <input
            onChange={(e) => setProductImage(e.target.files[0])}
            className="textInput"
            name="productImage"
            type="file"
          />
        </div>
        <div className="btnContainer">
          <button type="submit" className="addButton">
            {loading ? <CustomSpinner /> : "ADD PRODUCT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
