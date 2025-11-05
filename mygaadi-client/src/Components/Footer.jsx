const Footer = () => {
  return (
    <div className="my-5">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#6351ce" }}>
          <div>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            {["facebook-f", "twitter", "google", "instagram", "linkedin", "github"].map(icon => (
              <a key={icon} href="#" className="text-white me-4">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </section> 

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">MyGaddi.com</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-title-line" />
                <p>Buy and sell used cars with trust. A simple, fast, and reliable way to connect buyers and sellers.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-title-line" />
                <p><a href="#!" className="text-white">React</a></p>
                <p><a href="#!" className="text-white">Spring Boot</a></p>
                <p><a href="#!" className="text-white">MySQL</a></p>
                <p><a href="#!" className="text-white">Bootstrap</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-title-line" />
                <p><a href="#!" className="text-white">Your Account</a></p>
                <p><a href="#!" className="text-white">Affiliate</a></p>
                <p><a href="#!" className="text-white">Shipping Rates</a></p>
                <p><a href="#!" className="text-white">Help</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto footer-title-line" />
                <p><i className="fas fa-home me-3"></i> Pune, India</p>
                <p><i className="fas fa-envelope me-3"></i> support@mygaddi.com</p>
                <p><i className="fas fa-phone me-3"></i> +91 98765 43210</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "lightgrey", color: "#000" }}>
          © 2025 MyGaddi.com — All rights reserved.
        </div>

      </footer>
    </div>
  );
};

export default Footer;
