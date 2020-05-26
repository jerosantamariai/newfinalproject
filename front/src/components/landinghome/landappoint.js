import React from 'react';
import { Link } from 'react-router-dom';

function LandAppoint() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide no-gutters" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="data:image/jpeg;base64,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" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            <h2><strong>The Barber Shop</strong><br />
                      in New York</h2>
              <p className="lead">With SMBarber responsive landing page template, you can showcase your next barber shop websites!</p>
              <Link to="/appointment" className="btn btn-dark btn-radius btn-brd grd1 effect-1 butn  specialbtn">APPOINTMENT NOW</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAZdCwx6DBlwzts6Xu_qmjdPpHPcwx9Q8YekChkueqLZLBSVK9&usqp=CAU" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
            <h2><strong>The Barber Shop</strong><br />
                      in New York</h2>
              <p className="lead">With SMBarber responsive landing page template, you can showcase your next barber shop websites!</p>
              <Link to="/appointment" className="btn btn-dark btn-radius btn-brd grd1 effect-1 butn specialbtn">APPOINTMENT NOW</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJM16XOIY1qAJ7n9XDYXrQj3K48TpoGIcly7JN-mf8lpL2nyB4&usqp=CAU" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2><strong>The Barber Shop</strong><br />
                      in New York</h2>
              <p className="lead">With SMBarber responsive landing page template, you can showcase your next barber shop websites!</p>
              <Link to="/appointment" className="btn btn-dark btn-radius btn-brd grd1 effect-1 butn specialbtn">APPOINTMENT NOW</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
    </>
  );
}

export default LandAppoint;