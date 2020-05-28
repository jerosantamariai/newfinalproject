import React, { useContext } from 'react';
import { Context } from '../../store/appContext';

const Dashuser = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashuserteiner">
                {
                    !!store.errors && (
                        <div className="row fixed-top text-center">
                            <div className="col-md-12">
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>ERROR!</strong> {store.errors.msg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper">
                        <div className="col-md-8 my-3 mx-auto text-center">
                            <h1>User's Information</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb text-white" id="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User's Info</li>
                                </ol>
                            </nav>
                            {
                                !!store.currentUser && (
                                    <form onSubmit={e => actions.changePassword(e, props.history)}>
                                        <div className="form-group">
                                            <label htmlFor="name">What is your name?</label>
                                            <input type="text" className="form-control text-center" id="name" name="name" placeholder={store.currentUser.users.name} onChange={actions.handleChange} value={store.name} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastname">What is your last name?</label>
                                            <input type="text" className="form-control text-center" id="lastname" name="lastname" placeholder={store.currentUser.users.lastname} onChange={actions.handleChange} value={store.lastname} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">What is your email?</label>
                                            <input type="email" className="form-control text-center" id="email" name="email" placeholder={store.currentUser.users.email} onChange={actions.handleChange} value={store.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">What is your phone number?</label>
                                            <input type="text" className="form-control text-center" id="phone" name="phone" placeholder={store.currentUser.users.phone!=="" ? "+569XXXXXXXX" : store.currentUser.users.phone} onChange={actions.handleChange} value={store.phone} />
                                            <small>***Please follow the number format!***</small>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashuser;