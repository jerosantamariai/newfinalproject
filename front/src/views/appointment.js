import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Appointment = props => {
  const { store, actions } = useContext(Context)
  useEffect(() => {
    if (!store.isAuth) props.history.push("/login");
  }, []);
  return (
    <>
    <div className="appointsteiner">
      <h1>Appointment!!!</h1>
      </div>
    </>
  );
}

export default Appointment;