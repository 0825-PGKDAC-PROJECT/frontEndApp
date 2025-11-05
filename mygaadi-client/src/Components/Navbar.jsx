const Navbar = () => {
    return <div>
        <nav className="navbar bg-body-tertiary p-0">
            <div className="container-fluid p-0">
                {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" classNameName="d-inline-block align-text-top" /> */}
                <div className="d-flex w-100 justify-content-between p-4 align-items-center" style={{backgroundColor: "slategrey"}}>
                    <div>
                        <span>🚗</span>
                        <span className="fw-bolder">MyGaadi.com</span>
                    </div>
                    <div className="d-flex gap-4">
                        <div>
                            <p className="mb-0">Location</p>
                        </div>
                        <div>
                            <p className="mb-0">User Name</p>
                        </div>
                    </div>
                </div> 
 
            </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid pt-2 pb-2 " style={{backgroundColor: 'lightgrey'}}>
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar