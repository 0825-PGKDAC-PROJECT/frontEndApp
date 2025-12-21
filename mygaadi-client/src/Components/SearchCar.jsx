import React, { useState } from "react";
import FilterPanel from "./FilterPanel";
import CarCards from "./CarCards";
import banner from "../assets/carbanner1.jpg";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";
import car7 from "../assets/car7.jpeg";
import car8 from "../assets/car8.jpeg";
import car9 from "../assets/car9.jpeg";
import car10 from "../assets/car10.jpeg";


const SearchCar = () => {
    const [search, setSearch] = useState("");

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
        },
        {
            name: "2022 Tata Nexon EV",
            price: "₹ 18,50,000",
            emi: "₹10,000/m*",
            mileage: "312km range",
            fuel: "Electric",
            transmission: "Automatic",
            registration: "DL-03",
            location: "New Delhi",
            description: "Eco-friendly electric SUV",
            image: car3
        },
        {
            name: "2017 Audi A6",
            price: "₹ 45,00,000",
            model: "2.0 TDI",
            emi: "₹18,000/m*",
            mileage: "19.8km",
            fuel: "Diesel",
            transmission: "Automatic",
            registration: "KA-03",
            location: "Bengaluru",
            description: "Elegant sedan with advanced comfort",
            image: car4
        },
        {
            name: "2021 Mercedes-Benz GLC",
            price: "₹ 88,00,000",
            model: "300 4MATIC",
            emi: "₹35,000/m*",
            mileage: "16km",
            fuel: "Petrol",
            transmission: "Automatic",
            registration: "TN-10",
            location: "Chennai",
            description: "Smart luxury SUV with refined features",
            image: car5
        },
        {
            name: "2016 Toyota Fortuner",
            price: "₹ 28,00,000",
            model: "2.8 Diesel",
            emi: "₹14,000/m*",
            mileage: "13km",
            fuel: "Diesel",
            transmission: "Manual",
            registration: "MH-04",
            location: "Thane",
            description: "Tough SUV with off-road capability",
            image: car6
        },
        {
            name: "2020 Hyundai Creta",
            price: "₹ 16,00,000",
            model: "SX Turbo",
            emi: "₹9,000/m*",
            mileage: "18.5km",
            fuel: "Petrol",
            transmission: "Automatic",
            registration: "GJ-05",
            location: "Ahmedabad",
            description: "Compact SUV with modern styling",
            image: car7
        },
        {
            name: "2018 Maruti Suzuki Baleno",
            price: "₹ 7,80,000",
            model: "Zeta Petrol",
            emi: "₹6,000/m*",
            mileage: "22km",
            fuel: "Petrol",
            transmission: "Manual",
            registration: "UP-16",
            location: "Noida",
            description: "Affordable hatchback with great mileage",
            image: car8
        },
        {
            name: "2019 Kia Seltos",
            price: "₹ 14,00,000",
            model: "HTX Plus",
            emi: "₹8,000/m*",
            mileage: "19.2km",
            fuel: "Diesel",
            transmission: "Manual",
            registration: "PB-11",
            location: "Ludhiana",
            description: "Feature-rich and stylish SUV",
            image: car9
        },
        {
            name: "2022 Tata Nexon EV",
            price: "₹ 18,50,000",
            model: "XZ+ EV",
            emi: "₹10,000/m*",
            mileage: "312km range",
            fuel: "Electric",
            transmission: "Automatic",
            registration: "DL-03",
            location: "New Delhi",
            description: "Eco-friendly electric SUV with high safety",
            image: car10
        }
    ];

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container-xxl">
            <div className="row">
                {/* Left Filter */}
                <FilterPanel />

                {/* Right Listing */}
                <div className="col p-4">
                    {/* Search */}
                    <div className="input-group input-group-lg mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by model"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <span className="input-group-text">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>

                    {/* Carousel */}
                    <div id="carouselExample" className="carousel slide mb-3">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={banner}
                                    className="d-block w-100"
                                    height="200"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sort */}
                    <div className="dropdown float-end mb-4">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Best Match
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">Price High to Low</li>
                            <li className="dropdown-item">Price Low to High</li>
                        </ul>
                    </div>

                    <br />
                    <br />

                    {/* Cards */}
                    <div className="d-flex flex-wrap justify-content-between w-100" >
                        {filteredCars.map((car, index) => (
                            <CarCards key={index} car={car} />
                        ))}
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default SearchCar;
