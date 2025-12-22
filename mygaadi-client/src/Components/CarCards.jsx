import React from "react";
import { useNavigate } from "react-router";

const CarCards = ({ car }) => {

  const navigate = useNavigate();

  const goToCarDetails = () => {
    navigate("/car-details")
  }

  return (
    <div className="card shadow mb-4" style={{ width: "19rem" }} onClick={goToCarDetails}>
      <div className="position-relative">
        <img
          src={car.image}
          className="card-img-top"
          height="150"
          alt={car.name}
        />
        <i className="fa-solid fa-heart fs-5 p-3 position-absolute top-0 end-0 text-white"></i>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold w-50">{car.name}</h6>
          <p className="fw-bold mb-0">{car.price}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="mb-1">{car.fuel}</p>
          <p className="mb-1">EMI {car.emi}</p>
        </div>

        <div className="mb-2">
          <span className="badge bg-secondary me-1">{car.mileage}</span>
          <span className="badge bg-secondary me-1">{car.fuel}</span>
          <span className="badge bg-secondary me-1">{car.transmission}</span>
          <span className="badge bg-secondary">{car.registration}</span>
        </div>

        <div className="mb-2">
          <i className="fa-solid fa-location-dot me-1"></i>
          <small>{car.location}</small>
        </div>

        <hr className="my-2" />

        <p className="small mb-0">{car.description}</p>
      </div>
    </div>
  );
};

export default CarCards;
