import React from 'react';
import { Link } from 'react-router-dom';

function LandAbout() {
  return (
    <>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="message-box">
            <h4>About</h4>
            <h1><strong>Welcome to SMBarber</strong></h1>
            <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                                    vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus
            faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum
            neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu
                                    bibendum risus. Phasellus et congue justo. </p>

            <Link to="/aboutus" data-scroll
              className="btn btn-dark btn-radius btn-brd grd1 effect-1 specialbtn">Learn More</Link>
          </div>
        </div>
      </div>

      <hr className="hr1 my-5 col-md-10" />

      <div className="row">
        <div className="col-md-12">
          <div className="about-tab">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item mx-2" role="presentation">
                <a className="nav-link active btn btn-light specialbtn" id="pills-mission-tab" data-toggle="pill" href="#pills-mission" role="tab" aria-controls="pills-mission" aria-selected="true">Our Mission</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link btn btn-light specialbtn" id="pills-why-tab" data-toggle="pill" href="#pills-why" role="tab" aria-controls="pills-why" aria-selected="false">Why Us?</a>
              </li>
              <li className="nav-item mx-2" role="presentation">
                <a className="nav-link btn btn-light specialbtn" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-about" aria-selected="false">About Us</a>
              </li>
            </ul>
            <div className="tab-content col-10 mx-auto text-center" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque
              tortor mi, eget mattis velit sagittis id. Duis ornare mauris eu eros
              interdum, vitae finibus arcu ultricies. Donec vitae felis eleifend,
              dignissim erat a, pretium diam. Donec eu massa odio. Suspendisse et ornare
                                            lacus, pharetra imperdiet ligula.</p>
                <p>Vestibulum ac quam id lorem semper condimentum. Nulla vel ligula turpis.
                Nullam luctus, mi nec rhoncus gravida, tortor est semper purus, a feugiat
                sapien odio non urna. Fusce pellentesque neque ut nisi rhoncus imperdiet.
                Sed eu purus vel turpis consectetur convallis. Donec a dolor tellus.
                                            Phasellus dignissim erat nec ipsum condimentum sollicitudin. </p></div>
              <div className="tab-pane fade" id="pills-why" role="tabpanel" aria-labelledby="pills-why-tab"><p>There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                            embarrassing hidden in the middle of text.</p>
                <ul className="no-bullets">
                  <li><i className="far fa-circle" aria-hidden="true"></i> User Experince</li>
                  <li><i className="far fa-circle" aria-hidden="true"></i> Full Devices</li>
                  <li><i className="far fa-circle" aria-hidden="true"></i> Awesome Design</li>
                  <li><i className="far fa-circle" aria-hidden="true"></i> Visual Impact</li>
                  <li><i className="far fa-circle" aria-hidden="true"></i> 100% Sincronized</li>
                  <li><i className="far fa-circle" aria-hidden="true"></i> Custom Support</li>
                  
                </ul></div>
              <div className="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab"><p>There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                            embarrassing hidden in the middle of text.</p></div>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr1 col-md-10" />
    </>
  );
}

export default LandAbout;