import React, { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashUserView = props => {
    const { store, actions } = useContext(Context)
    const userurl = props.match.params.email;
    return (
        <>
            <div className="blogteiner">
                <div className="card-group">
                    <div className="row">
                        {
                            !!store.users ?
                                store.users.map((usr, i) => {
                                    if (JSON.stringify(usr.email) === JSON.stringify(userurl)) {
                                        // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white mb-3 d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-3 my-auto">
                                                    <img src="http://placehold.it/300x200" className="card-img-top" alt={"image of " + usr.email} />
                                                    <Link to={"/dashboard/dashadminuser"} className="btn btn-secondary d-flex justify-content-center blogitem text-white">Back</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h2 className="card-title">{usr.name}</h2>
                                                    <h5 className="card-text">{usr.lastname}</h5>
                                                    <p className="card-text">{usr.email}</p>
                                                    <p className="card-text">{usr.phone}</p>
                                                    <hr className="hr1" />
                                                    <p className="card-text">{usr.role.rolename}</p>
                                                    {
                                                        usr.role.id == 1 ? (
                                                            <>
                                                                <select className="custom-select col-md-4">
                                                                    <option selected>Select Role for the User</option>
                                                                    <option value="2">Customer</option>
                                                                </select>
                                                                <button type="button" className="btn dashitem text-white">Save</button>
                                                            </>
                                                        ) : (
                                                                <>
                                                                    <select className="custom-select col-md-4">
                                                                        <option selected>Select Role for the User</option>
                                                                        <option value="1">Admin</option>
                                                                    </select>
                                                                    <button type="button" className="btn dashitem text-white">Save</button>
                                                                </>
                                                            )
                                                    }
                                                    <p className="card-text">Release Date: {usr.createdate}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>

                </div>
            </div>
        </>
    );
}
export default DashUserView;