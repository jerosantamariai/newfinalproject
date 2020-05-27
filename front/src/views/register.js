import React from 'react';

function Register() {
  return (
    <>
      <div className="registeiner col-md-12">
        <div className="row d-flex justify-content-center text-center py-3">
          <div className="col-md-12">
            <h1 id="title">REGISTER FORM</h1>
            <p id="description"><i>Thank you for join our community!</i></p>
          </div>
        </div>
        <div className="row d-flex justify-content-center py-3" id="survey-form">
          <form>
            <div className="col-md-12">
              <div className="form-group">
                <label for="name" className="col-sm-2 col-form-label">Nickname</label>
                <div className="col-md-12">
                  <input type="text" className="form-control" id="nickname" placeholder="Enter your nickname" />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-md-12">
                  <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
                  <div className="invalid-feedback">
                    Please choose a correct email.
                            </div>
                </div>
              </div>
              <div className="form-group">
                <label for="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-md-12">
                  <input type="password" className="form-control" id="password" placeholder="Enter you password..." />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <button type="button" className="btn btn-success btn-md btn-block">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;