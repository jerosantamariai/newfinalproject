import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import LandComments from '../components/landinghome/landcomments';
const Appointment = props => {
  // const { store, actions } = useContext(Context)
  // useEffect(() => {
  //   if (!store.isAuth) props.history.push("/login");
  // }, []);
  return (
    <>
      <div className="appointsteiner text-center">
        <div className="  ">
          <h2 className="aboutsteinertitulo">Appointment<br /></h2>
          <ul className="breadcrumb" id="breadcrumb">
            <li><Link className="text-white" href="/">Home / </Link></li>
            <li><p className="text-warning"> Appointment</p></li>
          </ul>
        </div>
      </div>
      <section className="section text-center noDecoration">
        <Link className="noDecoration" to="/appointment"><h5>Interesting our awesome barber services? Just drop an appointment form below!</h5></Link>
      </section>
      <div id="barbers" className="barbersection pt-5">
        <div className="container-fluid"></div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="section-title row text-center d-flex justify-content-center">
            <div className="col-md-8 col-md-offset-2">
              <small>LET'S MAKE AN APPOINTMENT FOR YOUR LIFE</small>
              <h1><strong>Book Now</strong> </h1>
              <hr className="grd1" />
              <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula
                                enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row appointment-cont ">
          <div className="col-md-6">
            <div className="appointment-left">
              <h2>Opening Time</h2>
              <div className="appointment-time">
                <ul>
                  <li>
                    <span>Monday </span><span id="span-1"></span> <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Tuesday </span> <span id="span-2"> </span> <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Wednesday </span> <span id="span-3"></span>  <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Thursday </span> <span id="span-4"></span>  <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Friday  </span> <span id="span-5"></span>  <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Saturday  </span> <span id="span-6"></span> <span>10am-4pm</span>
                  </li>
                  <li>
                    <span>Sunday  </span> <span id="span-7"></span>  <span>CLOSED</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="contactform">
            <form id="contactform-form" className="row" method="post">
              <div className=" col-md-6 col-xs-6">
                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-md-6 col-xs-6">
                <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
              </div>
              <div className="mt-2 col-md-12 col-xs-12">
                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mt-2 col-md-12 col-xs-12">
                <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
              </div>
              <div className="mt-2 col-md-12 col-xs-12">
                <select id="inputState" class="form-control">
                  <option selected>Select time</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekend">Weekend</option>
                </select>
              </div>
              <div className="mt-2 col-md-12 col-xs-12">
                <textarea className="form-control" name="comments" id="comments" rows="6" placeholder="Give us more details.."></textarea>
              </div>
              <div className="mt-2 text-center ">
                <button type="submit" value="SEND" id="submit" className="btn btn-primary btn-radius btn-brd grd1 btn-block subt ml-3">Get Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="hr1 my-5 col-md-10" />
      <LandComments />
    </>
  );
}
export default Appointment;