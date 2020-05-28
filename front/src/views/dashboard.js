import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
    return (
        <>
            <div className="dashteiner">
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper">
                        <div className="col-md-12 my-3 mx-auto">
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Cras justo odio</Link>
                                <Link to="/dashboard/dashpass" className="list-group-item list-group-item-action dashitem text-white">Change Password</Link>
                                <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Morbi leo risus</Link>
                                <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Porta ac consectetur ac</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;