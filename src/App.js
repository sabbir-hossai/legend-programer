import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Abouts/About/About";
import Dashboard from "./Components/Dashboards/Dashboard/Dashboard";
import Home from "./Components/Homes/Home/Home";
// import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* PrivateRoute  */}

          {/* <Route path="/appointment" element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>}>
          </Route>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}> */}

          --------

          {/* nestedRoute  */}

          {/* <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
            </Route>
            <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

            </Route>
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>}>
            </Route>
            <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
              <AddDoctor></AddDoctor>
            </AdminRoute>}>
            </Route>
          </Route> */}
          {/* normal route */}
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
