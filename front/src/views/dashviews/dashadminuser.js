import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';

const DashAdminUser = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="appointsteiner">
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
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="my-5">Current Admin Users</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.users ? (
                                        store.users.map((user, i) => {
                                            return (
                                                <div className="d-flex">
                                                    {
                                                        user.role.id != 2 && (
                                                            <>
                                                                <Link
                                                                    to={"/dashboard/dashadminuser/" + user.email}
                                                                    key={i}
                                                                    className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white"
                                                                    name="role_id"
                                                                    value="2"
                                                                    onClick={() => actions.changeRole(user.role.id)}>
                                                                    {user.id} - {user.email}
                                                                </Link>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }))
                                        : (
                                            <div className="content-center" id="undefined">
                                                <div className="spinner-grow text-light" role="status">
                                                </div>
                                            </div>
                                        )
                                }
                            </ul>
                        </div>
                        <h3 className="my-5">Current Customer Users</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.users ?
                                        store.users.map((user, i) => {
                                            return (
                                                <div className="d-flex">
                                                    {
                                                        user.role.id === 2 && (
                                                            <>
                                                                <Link
                                                                    to={"/dashboard/dashadminuser/" + user.email}
                                                                    key={i}
                                                                    className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white"
                                                                    name="role_id"
                                                                    value="1"
                                                                    onClick={(e) => actions.handleChange(e), actions.changeRole(user.role.id)}>
                                                                    {user.id} - {user.email}
                                                                </Link>

                                                                {/* <div className="accordion" id="accordionExample">
                                                                    <div className="card dashitem text-white">
                                                                        <div className="card-header" id="headingOne">
                                                                            <h2 className="mb-0">
                                                                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{user.id} - {user.email}</button>
                                                                            </h2>
                                                                        </div>

                                                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                            <div className="card-body">
                                                                                <div className="mt-2 col-md-12 col-xs-12">
                                                                                    <select id="role_id" className="form-control" name="role_id" onChange={actions.handleChange} value={store.role_id}>
                                                                                        <option selected>Select time</option>
                                                                                        <option value="1">Admin</option>
                                                                                        <option value="2">Customer</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}

                                                                {/* <div className="input-group d-flex justify-content-between vertical-center dashitem text-white">
                                                                    {user.id} - {user.email}
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Role</button>
                                                                        <div className="dropdown-menu">
                                                                            <a className="dropdown-item" href="#" value="1">Admin</a>
                                                                            <a className="dropdown-item" href="#" value="2">Customer</a>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                        : (
                                            <div className="content-center" id="undefined">
                                                <div className="spinner-grow text-light" role="status">
                                                </div>
                                            </div>
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashAdminUser;