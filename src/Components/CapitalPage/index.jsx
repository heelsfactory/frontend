import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TableComponent from "../Table";
import { Space, Table, Tag } from "antd";
import DrawerPage from "../Drawer";
import "./capital.css";
import { BulletList } from "react-content-loader";
import ViewCapitalDetails from "../ViewCapitalDetails";
import { addSalesProduct } from "../../Features/Sales/addSalesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllCapital } from "../../Features/Capital/getAllCaptalSlice";
import AddCapital from "../AddCapital/AddCapital";
import { searchCapital } from "../../Features/Capital/getAllCaptalSlice";

const CapitalPage = () => {
  const [view, setView] = useState(false);
  const [open, setOpen] = useState(false);
  const [viewId, setViewId] = useState("");
  const [search, setSearch] = useState("")
  const { data, error, loading, searchData } = useSelector((state) => state.allCapital);
  const dispatch = useDispatch();
  
  const filteredData = typeof searchData === 'string' ?
  data.filter((item)=> item.month.toLowerCase().includes(searchData.toLowerCase())) : data
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Month Number",
      dataIndex: "monthNumber",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Advertising Cost",
      dataIndex: "advertisingCost",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Packaging Cost",
      dataIndex: "packagingCost",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Capital",
      dataIndex: "capital",
      render: (text, record) => <p className="innerText">{text}</p>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space size="middle">
          <button className="viewBtn" onClick={() => handleView(record._id)}>
            View
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
    dispatch(getAllCapital());
  }, []);
  useEffect(()=>{
    dispatch(searchCapital(search))
  },[search])
  return (
    <div>
      <div className="container">
        <div className="iconWrapper">
          <div className="icon">
            <h1 className="header">Capital</h1>
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
                  placeholder="Search by month"
                  value={search}
                  onChange={(e)=> setSearch(e.target.value)}
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
          title={view ? "View Capital" : "Add Capital"}
        >
          {view ? (
           
               <ViewCapitalDetails id={viewId} />
            
           
          ) : (
            <div>
              <AddCapital/>
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

export default CapitalPage;
const MyBulletListLoader = () => <BulletList />;
