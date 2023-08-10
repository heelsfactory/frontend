import React from "react";
import "./Dashboard.css";
import Lottie from "lottie-react";
import animationData from "../../assets/heels.json";
import product from "../../assets/product.png";
import sales from "../../assets/sales.png";
import finance from "../../assets/finance.png";
const Dashboard = () => {
  return (
    <div>
      <div className="dashboardContainer">
        <div className="cards">
          <div className="card">
            <div className="card-img">
              {/* <Lottie animationData={animationData} loop={true} 
              style={{ height: 250}}
            /> */}
              <img src={product} alt="" height={250} />
            </div>
            <div className="card-title">
              <h3>Products</h3>
            </div>
            <div className="card-desc">
              Manage costs, inventory of all your products
            </div>

            <button className="btn">View</button>
          </div>

          <div className="card">
            <div className="card-img">
              {/* <Lottie animationData={animationData} loop={true} 
              style={{ height: 250}}
            /> */}
              <img src={sales} alt="" height={250} />
            </div>
            <div className="card-title">
              <h3>Sales</h3>
            </div>
            <div className="card-desc">
              Monitor sales, see sales history and check by month
            </div>
            <button className="btn">View</button>
          </div>
          <div className="card">
            <div className="card-img">
              {/* <Lottie animationData={finance} loop={true} 
              style={{ height: 250}}
            /> */}
              <img src={finance} alt="" height={250} />
            </div>
            <div className="card-title">
              <h3>Capital</h3>
            </div>
            <div className="card-desc">
             See investment breakdown on a monthly basis
            </div>
            <button className="btn">View</button>
          </div>
          {/* <div className="card">2</div>
          <div className="card">3</div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
