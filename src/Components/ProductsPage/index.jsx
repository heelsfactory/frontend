import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TableComponent from "../Table";
import { Space, Table, Tag } from "antd";
import DrawerPage from "../Drawer";
import "./Products.css";
import { BulletList } from "react-content-loader";
import AddProducts from "../AddProducts";
import ViewProductDetails from "../ViewProductDetails/ViewProductDetails";
import { getAllProducts } from "../../Features/Products/getAllOProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../Features/Products/getAllOProductsSlice";
import { deleteProduct } from "../../Features/Products/deleteProductSlice";

const ProductsPage = () => {
  const [view, setView] = useState(false);
  const [open, setOpen] = useState(false);
  const [viewId, setViewId] = useState("");
  const [search, setSesarch]=useState("")
  const { data, error, loading, searchData } = useSelector((state) => state.allProducts);


  const filteredData = typeof searchData === 'string' ?
  data.filter((item)=> item.productName.toLowerCase().includes(searchData.toLowerCase())) : data

  
  const handleDeleteProduct =(productId)=>{
    dispatch(deleteProduct(productId))
  }
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Cost Price",
      dataIndex: "costPrice",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Initial Quantity",
      dataIndex: "initialQuantity",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Profit Expected",
      dataIndex: "profitExpected",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space size="middle">
          <button className="viewBtn" onClick={() => handleView(record._id)}>
            View
          </button>
          <button className="deleteBtn" onClick={()=>handleDeleteProduct(record._id)} >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const handleView = (id) => {
    setViewId(id);
    setView(true);
    setOpen(true);
  };

  const showDrawer = () => {
    setOpen(true);
    setView(false); // Set view to false when the drawer is opened
  };

  

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(()=>{
    dispatch(searchProduct(search))
  },[search])
  return (
    <div>
      <div className="container">
        <div className="iconWrapper">
          <div className="icon">
            <h1 className="header">Products</h1>
            <button className="mybtn " onClick={showDrawer}>
              Add
            </button>
          </div>
          <div className="icon icon-date">
            <div className="date">
              <div className="fromDate">
                <label className="labelName">From:</label>
                <input className="dateInput" type="date" />
              </div>
              <div className="toDate">
                <label className="labelName">To:</label>
                <input className="dateInput" type="date" />
              </div>
            </div>
            <div>
              <div className=" searchContainer">
                <input
                  type="text"
                  className="search"
                  placeholder="Find product"
                  value={search}
                  onChange={(e)=>setSesarch(e.target.value)}
                />
                <span className="search-icon">
                  <AiOutlineSearch />
                </span>
              </div>
            </div>
          </div>
        </div>

        <DrawerPage
          id={viewId}
          open={open}
          onClose={onClose}
          title={view ? "View details" : "Add product"}
        >
          {view ? (
           
               <ViewProductDetails id={viewId} />
            
           
          ) : (
            <div>
              <AddProducts/>
            </div>
          )}
        </DrawerPage>

        <div className="content">
          {loading ? <MyBulletListLoader /> :
       <TableComponent myData={filteredData} columns={columns} id={viewId} />
          }
     
        </div>
      </div>
    </div>
  );

};

export default ProductsPage;
const MyBulletListLoader = () => <BulletList />;
