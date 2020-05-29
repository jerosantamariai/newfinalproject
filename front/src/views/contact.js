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
              <form onSubmit={e => actions.contact(e, props.history)}>
                <div className="form-group">
                  <label htmlFor="name">What is your name?</label>
                  <input type="text" className="form-control text-center" id="name" name="name" onChange={actions.handleChange} value={store.c_name} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">What is your last name?</label>
                  <input type="text" className="form-control text-center" id="lastname" name="lastname" onChange={actions.handleChange} value={store.c_lastname} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">What is your email?</label>
                  <input type="email" className="form-control text-center" id="email" name="email" onChange={actions.handleChange} value={store.c_email} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">What is your phone number?</label>
                  <input type="text" className="form-control text-center" id="phone" name="phone" onChange={actions.handleChange} value={store.c_phone} />
                  <small>***Please follow the number format!***</small>
                </div>
                <div className="form-group">
                  <label htmlFor="c_text">What do yopu want to tell us?</label>
                  <input type="text" className="form-control text-center" id="c_text" name="c_text" onChange={actions.handleChange} value={store.c_text} />
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