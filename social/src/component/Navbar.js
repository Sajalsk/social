import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {

  let navigate = useNavigate();
  let location = useLocation();

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  // Navbar
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

      {/* Socials */}

        <Link className="navbar-brand" to="/">
         Socials
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
                {/* Home */}
            <li className="nav-item">
         
             <Link 
             className={`nav-link ${location.pathname === "/" ? "active" : "" }`} 
             aria-current="page" 
             to="/">Home </Link>
            </li>
             
              {/* about */}
            <li className="nav-item">
           
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

        {
            !localStorage.getItem("token") ? (
            <form className="d-flex">

              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>

              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                Register
              </Link>

            </form>
          ) : (
          <>
           <span style={{color:"white" , marginRight:"30px"}}>User Logged In</span>
            <button onClick={handlelogout} className="btn btn-primary">
              Logout
            </button>
             
              </>
          )
        }


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
