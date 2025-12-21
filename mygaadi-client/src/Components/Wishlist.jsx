import car1 from "../assets/car1.jpeg"
import car2 from "../assets/car2.jpeg"
import CarCards from "./CarCards"

const Wishlist = () => {

     const cars = [
            {
                name: "2018 Lamborghini Huracan",
                price: "₹ 1,00,00,000",
                emi: "₹20,000/m*",
                mileage: "20.5km",
                fuel: "Petrol",
                transmission: "Manual",
                registration: "MH-14",
                location: "Mumbai",
                description: "Highly affordable & reliable",
                image: car1
            },
            {
                name: "2020 Ferrari 488 GTB",
                price: "₹ 2,20,00,000",
                emi: "₹45,000/m*",
                mileage: "15.3km",
                fuel: "Petrol",
                transmission: "Automatic",
                registration: "MH-12",
                location: "Pune",
                description: "Powerful engine & smooth handling",
                image: car2
            }
     ]
    return (
        <div>
             {/* Cards */}
            <div className="d-flex flex-wrap gap-4 w-100" >
                {cars.map((car, index) => (
                    <CarCards key={index} car={car} />
                ))}
            </div>
        </div>
    )
}

export default Wishlist;