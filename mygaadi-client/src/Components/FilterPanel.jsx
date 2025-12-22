import React from "react";

const FilterPanel = () => {
  return (
    <div className="col-3 ">
      <div className="card shadow p-4 mt-4 bg-light" style={{ width: "320px" }}>
        <h6 className="fw-bold">Budget</h6>

        <div className="mt-3">
          <div className="d-flex justify-content-between small text-muted">
            <span>₹1,00,000</span>
            <span>₹15,00,000</span>
          </div>
          <input
            type="range"
            className="form-range"
            min="100000"
            max="1500000"
            step="50000"
          />
          <div className="d-flex justify-content-between small text-muted">
            <span>Minimum</span>
            <span>Maximum</span>
          </div>
        </div>

        <hr />

        <h6 className="fw-bold">Make & Model</h6>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {["Maruti", "Hyundai", "Tata", "Honda", "Mahindra"].map(
            (brand, index) => (
              <span
                key={index}
                className="badge bg-secondary-subtle text-dark px-3 py-2"
              >
                {brand}
              </span>
            )
          )}
        </div>

        <hr />

        <div className="accordion accordion-flush" id="filterAccordion">
          {[
            "Model Year",
            "Fuel",
            "Body Type",
            "Color",
            "Features",
            "RTO",
            "Safety",
            "Discount",
          ].map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed py-2 bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                >
                  {item}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <p className="small mb-0 text-muted">
                    Filter options here
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
