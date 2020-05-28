import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Dashboard = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashteiner">
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper">
                        <div className="col-md-12 my-3 mx-auto">
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Agregar/Cambiar Información Personal</Link>
                                <Link to="/dashboard/dashpass" className="list-group-item list-group-item-action dashitem text-white">Cambiar Contraseña</Link>
                                <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Morbi leo risus</Link>
                                <Link to="/" className="list-group-item list-group-item-action dashitem text-white" onClick={actions.logout}>Cerrar Sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;