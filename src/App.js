import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Abouts/About/About";
import AddProduct from "./Components/Dashboards/AddProduct/AddProduct";
import Dashboard from "./Components/Dashboards/Dashboard/Dashboard";
import MakeAdmin from "./Components/Dashboards/MakeAdmin/MakeAdmin";
import MyOrder from "./Components/Dashboards/MyOrder/MyOrder";
import PaymentMethod from "./Components/Dashboards/PayMentMethod/PaymentMethod";
import Reviews from "./Components/Dashboards/reviews/Reviews";
import Home from "./Components/Homes/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
// import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <Routes>
          {/* normal route */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {/* nestedRoute  */}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>} />
            <Route path="addProduct" element={<AddProduct></AddProduct>} />
            <Route path="payMentMethod" element={<PaymentMethod></PaymentMethod>} />
            <Route path="MyOrders" element={<MyOrder></MyOrder>} />
            <Route path="Reviews" element={<Reviews></Reviews>} />
            {/* <Route path=":id" element={<ProductDisplay />} /> */}
          </Route>
        </Routes>
      
      </AuthProvider>
      
    </div >
  );
}

export default App;
