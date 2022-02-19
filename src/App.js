import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/Abouts/About/About";
// import AddProduct from "./Components/Dashboards/AddProduct/AddProduct";
// import Dashboard from "./Components/Dashboards/Dashboard/Dashboard";
import MakeAdmin from "./Components/Dashboards/MakeAdmin/MakeAdmin";
import MyOrder from "./Components/Dashboards/MyOrder/MyOrder";
import PaymentMethod from "./Components/Dashboards/PayMentMethod/PaymentMethod";
import Reviews from "./Components/Dashboards/reviews/Reviews";
import Home from "./Components/Homes/Home/Home";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboards/Dashboard/Dashboard"
import DetailsFood from "./Components/Homes/HomeFood/DetailsFood/DetailsFood";
import RoomDetails from "./Components/Homes/Home/HomeRoom/RoomDetails/RoomDetails";
import AddFood from "./Components/Dashboards/AddFood/AddFood";
import AddRoom from "./Components/Dashboards/Dashboard/AddRoom/AddRoom";
// import { render } from "react-dom";
// import Dashboard from "./Components/Dashboards/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* normal route */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/about" element={<About></About>} />
          <Route path="/login" element={<Login></Login>} />
          {/* <Route path="addFoods" element={<AddFood></AddFood>} />
          <Route path="addRoom" element={<AddRoom></AddRoom>} /> */}
          <Route path="/serviceDetails/:id" element={<DetailsFood></DetailsFood>} />
          <Route path="/service/:id" element={<RoomDetails></RoomDetails>} />
          {/* <PrivetRoute path='/serviceDetails/:id'>
        <DetailsProducts></DetailsProducts>
      </PrivetRoute> */}
          {/* nestedRoute  */}

          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            {/* <Route path="/addfoods" element={<AddFood></AddFood>} />
            <Route path="/addroom" element={<AddRoom></AddRoom>} /> */}

            <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>} />
            <Route path="addFoods" element={<AddFood></AddFood>} />
            <Route path="addRoom" element={<AddRoom></AddRoom>} />
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
