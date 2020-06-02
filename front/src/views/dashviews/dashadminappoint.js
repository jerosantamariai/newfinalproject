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
                <div className="col-md-6 col-sm-12 dashitem text-white">
                    <h2>Appointment: To Do</h2>
                </div>
                <hr className="hr1" />
                <div className="col-md-6 col-sm-12 dashitem text-white">
                    <h2>Appointment: Ready</h2>
                </div>
            </div>
        </>
    )
}

export default DashAdminAppoint;