import React, {useState, useEffect} from "react";
import './AddProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../Features/Products/addProductsSlice';
import CustomSpinner from "../CustomSpinner";
import { getAllProducts } from "../../Features/Products/getAllOProductsSlice";


const AddProducts = () => {
  const [products, setProducts] = useState({});
  const { error,data} = useSelector((state)=>state.allProducts)
  const {loading} = useSelector((state)=> state.addProduct)
  const [base64Image, setBase64Image] = useState(null); // State to store the base64 image
  const dispatch = useDispatch();

  const isValidImageSize = (file) => {
    const maxSizeKB = 500;
    return file.size / 1024 <= maxSizeKB;
  };

  const isValidImageType = (file) => {
    const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
    return acceptedTypes.includes(file.type);
  };

  const getProductData = (e) => {
    if (e.target.name === "productImage") {
      const file = e.target.files[0];
      if (file) {
        if (isValidImageType(file) && isValidImageSize(file)) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setBase64Image(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
        

          setBase64Image(null);
        }
      } else {
        setBase64Image(null);
      }
    } else {
      setProducts({ ...products, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addProduct({ ...products, productImage: base64Image }));
      // If the dispatch is successful, clear the form fields
      setProducts({
        productName: "",
        unitPrice: "",
        costPrice: "",
        quantity: "",
        profitExpected: "",
        productImage: "",
      });
      setBase64Image(null);
      Swal.fire("Product successfully added", "", "success");
    } catch (error) {

      // Handle the error, show a notification, or any other desired action.
      Swal.fire("Sorry, Something went wrong", "error");
    }
  };


 
 
 
  return (
    <div>
    <form className='container'  >
      <div className='textWrapper'>
        <label className='labelName'>Product Name</label> <br />
        <input onChange={getProductData} value={products.productName} className='textInput' name='productName' type='text' placeholder='enter product name' />
      </div>
      <div className='textWrapper'>
        <label className='labelName'>Unit price</label> <br />
        <input onChange={getProductData} value={products.unitPrice} className='textInput' name='unitPrice' type='text' placeholder='NGA2000' />
      </div>
      <div className='textWrapper'>
        <label className='labelName'>Cost Price</label> <br />
        <input onChange={getProductData} value={products.costPrice} className='textInput' name='costPrice' type='text' placeholder='NGA35000' />
      </div>
      <div className='textWrapper'>
        <label className='labelName'>Profit expected</label> <br />
        <input onChange={getProductData} value={products.profitExpected} className='textInput' name='profitExpected' type='text' placeholder='NGA5000' />
      </div>
      <div className='textWrapper'>
        <label className='labelName'>Quantity</label> <br />
        <input onChange={getProductData} value={products.quantity} className='textInput' name='quantity' type='text' placeholder='NGA5000' />
      </div>
      <div className='textWrapper'>
        <label className='labelName'>Product image</label> <br />
        <input onChange={getProductData} value={products.productImage} className='textInput' name='productImage' type='file' />
      </div> 
      <div className='btnContainer'>
        <button onClick={handleSubmit} type='submit' className='addButton'>
          
          {loading  ? <CustomSpinner />: "ADD PRODUCT"}
          </button>
      </div>
    </form>
  </div>
  )
}

export default AddProducts