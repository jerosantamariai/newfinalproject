import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Contact = props => {
  const { store, actions } = useContext(Context)
  return (
    <>
      <div className="contactsteiner">
        <div className="col-md-10 offset-md-1">
          <div className="row listwrapper">
            <div className="col-md-8 my-3 mx-auto text-center">
              <h1>Contact!!!</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white" id="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
              <form onSubmit={e => actions.setUserInfo(e, props.history)}>
                <div className="form-group">
                  <label htmlFor="name">What is your name?</label>
                  <input type="text" className="form-control text-center" id="name" name="name" onChange={actions.handleChange} value={store.name} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">What is your last name?</label>
                  <input type="text" className="form-control text-center" id="lastname" name="lastname" onChange={actions.handleChange} value={store.lastname} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">What is your email?</label>
                  <input type="email" className="form-control text-center" id="email" name="email" onChange={actions.handleChange} value={store.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">What is your phone number?</label>
                  <input type="text" className="form-control text-center" id="phone" name="phone" onChange={actions.handleChange} value={store.phone} />
                  <small>***Please follow the number format!***</small>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;