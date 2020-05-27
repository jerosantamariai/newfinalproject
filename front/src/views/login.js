import React from 'react';

function logIn() {
  return (
    <>
      <div className="loginsteiner">
        <div className="row d-flex justify-content-center text-center my-5">
          <div className="col-md-8">
            <h1>Welcome Back!</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-8">
            <form>
              <div className="form-group mb-5">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group mb-5">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary mb-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default logIn;