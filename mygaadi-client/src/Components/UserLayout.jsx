import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

const UserLayout = () => {
    return <div>
        <Navbar />
        <div style={{margin: "2% 8%"}}>
            <Outlet /> 
        </div>
        <Footer />
    </div>
}

export default UserLayout