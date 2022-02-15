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
// import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* normal route */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
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
      </BrowserRouter>
    </div >
  );
}

export default App;
