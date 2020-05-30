import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const DashAdminBlog = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="dashadminblogteiner">
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
                            <h1>Administrar Blogs</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb text-white" id="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Load/Change Blog</li>
                                </ol>
                            </nav>
                            <h3>Crear/Modificar Blogs</h3>
                            <form onSubmit={e => {
                                e.preventDefault();
                                actions.loadBlog(e, props.history)
                                }}>
                                <div className="form-group">
                                    <label htmlFor="title">What is the Title of the blog</label>
                                    <textarea className="form-control text-center rows-4" id="title" name="title" placeholder="" onChange={actions.handleChange} value={store.title} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bintro">What is the Intro of the blog?</label>
                                    <textarea className="form-control text-center rows-12" id="bintro" name="bintro" placeholder="" onChange={actions.handleChange} value={store.bintro} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="publictext">What is the Public Text of the blog?</label>
                                    <textarea className="form-control text-center rows-12" id="publictext" name="publictext" placeholder="" onChange={actions.handleChange} value={store.publictext} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="privatext">What is the Private Text of the blog?</label>
                                    <textarea className="form-control text-center rows-12" id="privatext" name="privatext" placeholder="" onChange={actions.handleChange} value={store.privatext} />
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="btn" className="btn btn-primary" onClick={(e)=> actions.setBlog(e)}>Edit</button>
                            </form>
                            <h3>Current Blogs</h3>
                            <div className="list-group d-flex justify-content-center overflow-auto my-1" id="scrollablecorps">
                                <ul>
                                    {
                                        store.blog !== null && store.blog !== undefined ?
                                            store.blog.map((blo, i) => {
                                                return (
                                                    <>
                                                        <Link
                                                            to="#"
                                                            className="list-group-item list-group-item-action d-flex justify-content-between dashitem text-white"
                                                            onClick={() => actions.getCurrent(blo.id, blo.title, blo.bintro, blo.publictext, blo.privatext)}>
                                                            {blo.id} - {blo.title}
                                                            <i
                                                                className="fas fa-trash"
                                                                id="deleteid"
                                                                name="deleteid"
                                                                value={store.deleteid}
                                                                onClick={e => actions.deleteBlogs(blo.id)}
                                                                >
                                                            </i>
                                                        </Link>
                                                    </>
                                                )
                                            })
                                            : (
                                                <div className="text-center" id="undefined">
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
            </div>
        </>
    )
}

export default DashAdminBlog;