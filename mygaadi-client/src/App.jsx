import { BrowserRouter, Route, Routes } from "react-router";
import UserLayout from "./Components/UserLayout";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route index element=<UserLayout/> >

        </Route>
      </Routes>

    </div>
  </BrowserRouter>
  )
}

export default App;
