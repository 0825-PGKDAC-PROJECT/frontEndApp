import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./Components/UserLayout";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import CarDetails from "./Components/CarDetails";
import SearchCar from "./Components/SearchCar";

function App() {
  return (
    <BrowserRouter>

      <div>
        <Routes>
          <Route path="/" element=<UserLayout /> >
            <Route index element=<SearchCar /> />
            <Route path="car-details" element=<CarDetails /> />
            <Route path="search-car" element=<SearchCar /> />
          </Route>
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App;
