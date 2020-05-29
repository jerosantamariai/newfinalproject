import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Dashboard = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashteiner">
                <div className="col-md-10 offset-md-1">
                    <div className="row listwrapper text-center">
                        {
                            !!store.currentUser && (
                                <div className="col-md-12 my-3 mx-auto">
                                    <h1>Hola <strong>{store.currentUser.users.email}</strong>!</h1>
                                    <p> Que deseas hacer?!</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="row listwrapper">
                        <div className="col-md-12 my-3 mx-auto">
                            {/* {
                                store.currentUser.users.role.id !== 2 && (
                                    <div className="list-group">
                                        <p>Menú {store.currentUser.users.role.rolename}</p>
                                        <Link to="/dashboard/dashuser" className="list-group-item list-group-item-action dashitem text-white">Agregar/Cambiar Blog</Link>
                                        <Link to="/dashboard/dashpass" className="list-group-item list-group-item-action dashitem text-white">Cambiar Contraseña</Link>
                                        <Link to="#" className="list-group-item list-group-item-action dashitem text-white">Usuarios</Link>
                                    </div>
                                ) 
                            } */}
                            <div className="list-group">
                                <Link to="/dashboard/dashuser" className="list-group-item list-group-item-action dashitem text-white">Agregar/Cambiar Información Personal</Link>
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