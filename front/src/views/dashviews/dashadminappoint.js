import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashAdminAppoint = props => {
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
                <div className="col-md-12 justify-content-center">
                    <h2>Appointment: To Do</h2>
                    <div className="list-group" id="scrollablecorps">
                        <ul>
                            {
                                !!store.appoints ? (
                                    store.appoints.map((appoint, i) => {
                                        return (
                                            <div className="d-flex dashitem text-white">
                                                {
                                                    appoint.app_status === "0" && (
                                                        <>
                                                            <Link
                                                                to={"/dashboard/dashadminuser/" + appoint.app_email}
                                                                key={i}
                                                                className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white">
                                                                {appoint.id} - {appoint.app_name} {appoint.app_lastname} - {appoint.app_email}
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
                </div>
                <hr className="hr1" />
                <div className="col-md-12">
                    <h2>Appointment: Ready</h2>
                    <div className="list-group" id="scrollablecorps">
                        <ul>
                            {
                                !!store.appoints ? (
                                    store.appoints.map((appoint, i) => {
                                        return (
                                            <div className="d-flex dashitem text-white">
                                                {
                                                    appoint.app_status === "1" && (
                                                        <>
                                                            <Link
                                                                to={"/dashboard/dashadminuser/" + appoint.app_email}
                                                                key={i}
                                                                className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white">
                                                                {appoint.id} - {appoint.app_name} {appoint.app_lastname} - {appoint.app_email}
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
                </div>
            </div>
        </>
    )
}

export default DashAdminAppoint;