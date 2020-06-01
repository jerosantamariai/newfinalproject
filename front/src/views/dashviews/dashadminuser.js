import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

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
                        <h3 className="my-5">Current Users</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.blog ?
                                        store.blog.map((blo, i) => {
                                            return (
                                                <div className="d-flex">
                                                    <Link
                                                        to="#"
                                                        className="list-group-item list-group-item-action d-flex justify-content-left dashitem text-white">
                                                        {blo.id} - {blo.title}
                                                    </Link>
                                                    {/* <div className="d-flex dashitem text-white">
                                                        <i
                                                            className="fas my-auto p-3 fa-trash"
                                                            id="deleteid"
                                                            name="deleteid"
                                                            value={store.deleteid}
                                                            onClick={e => actions.deleteBlogs(blo.id)}
                                                        >
                                                        </i>
                                                    </div> */}
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