import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { LoginPage,Products,Sales, Capital,DashboardPage } from "./Pages";
import SalesForm from "./Pages/test";
import { useSelector } from "react-redux";


function App() {
  const [count, setCount] = useState(0);
  // const isAuthenticated = useSelector((state)=>state.login.isAuthenticated)
  // if(!isAuthenticated){
  //   return <Navigate to="/" replace={true} />;
  // }
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage /> } />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/capital" element={<Capital />} />
      <Route path="/test" element={<SalesForm />} />
     
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
