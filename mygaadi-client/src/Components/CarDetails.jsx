 const CarDetails = () => {

    const carOverviewLabel = {
            color: "slategray",
            fontSize: "14px"
    }

    return <div>

        <div className="d-flex justify-content-between" style={{backgroundColor: "#f3f3f3ff"}}>
            {/* Carousel */}
            <div id="img-slider" style={{width: "50%", height: "fit-content"}} className="card shadow">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded" style={{height:"500px"}}>
                        <div className="carousel-item active h-100 w-100">
                            <img src="https://i.pinimg.com/736x/8c/9c/36/8c9c36e7defe036eae5b1627f0341fed.jpg" className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src="https://i.pinimg.com/736x/07/c4/96/07c496cf53714188a1557b1b731206ee.jpg" className="d-block w-100 h-100 object-fit-cover" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Car Info */}
            <div id="car-info" style={{width: "45%", height: "fit-content", backgroundColor: "#c7c6c667"}} className="p-4 card shadow rounded">
                <div className="d-flex justify-content-center align-items-center gap-4">
                    <div>
                        <h3>2022 Mahindra Thar Lx Hard Top Petrol Mt 4WD</h3>
                    </div>
                    <div>
                        <i style={{fontSize:"40px"}} className="fa-solid fa-heart"></i>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="badge badge-secondary">20.0km</span>
                    <span className="badge badge-secondary">Petrol</span>
                    <span className="badge badge-secondary">Manual</span>
                    <span className="badge badge-primary">MH-14</span>
                </div>

                <div className="d-flex gap-2 mt-4">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Mumbai</p>
                </div>

                <hr className="bg-lightgrey"/>

                <div>
                    <p className="mt-2">Fixed on road price</p>

                    <h3 className="fw-bold mt-2">₹ 11.99 Lakh</h3>
                    
                    <p className="mt-2">Includes RC transfer, insurance & more</p>
                </div>

                <hr />

                <div className="d-flex justify-content-around">
                    <button className="btn p-3 bg-secondary" >Book Now</button>
                    <button className="btn p-3 bg-secondary">Free Test Drive</button>
                </div>
            </div>
        </div>

        <div id="car-overview ">
            
            <div >
                <div className="card shadow  w-50 mt-4 p-4">
                     <h3 className="fw-bold mb-4 pb-4">Car overview</h3>
                      <div >
                           
                          <div className="d-flex  justify-content-between">
                                <div style={{ width: "10rem"}}>
                                    <p style={carOverviewLabel}>Reg. Year</p>
                                    <p style={carOverviewLabel}>Apr 2023</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>Fuel</p>
                                    <p style={carOverviewLabel}>Petrol</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>KM driven</p>
                                    <p style={carOverviewLabel}>17,558 km</p>
                                </div>
                          </div>
                          <hr />

                         <div className="d-flex  justify-content-between">
                                <div style={{ width: "10rem"}}>
                                    <p style={carOverviewLabel}>Transmission</p>
                                    <p style={carOverviewLabel}>Manual</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>Engine capacity</p>
                                    <p style={carOverviewLabel}>1997cc</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>Ownership</p>
                                    <p style={carOverviewLabel}>1st</p>
                                </div>
                          </div>
                          <hr />

                          <div className="d-flex  justify-content-between">
                                <div style={{ width: "10rem"}}>
                                    <p style={carOverviewLabel}>Make Year</p>
                                    <p style={carOverviewLabel}>Jun 2022</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>Spare key</p>
                                    <p style={carOverviewLabel}>No</p>
                                </div>
                                <div style={{width: "10rem"}}>
                                    <p style={carOverviewLabel}>Reg Number</p>
                                    <p style={carOverviewLabel}>HR85*9400</p>
                                </div>
                          </div>

                      </div>
                  
                </div>
            </div>





            
        </div>
    </div>
}

export default CarDetails