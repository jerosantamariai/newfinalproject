import React, { useContext } from 'react';
import { Context } from '../../store/appContext';

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
                            <h1>User's Information</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb text-white" id="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Load/Change Blog</li>
                                </ol>
                            </nav>
                            <form onSubmit={e => actions.loadBlog(e, props.history)}>
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
                            </form>
                            <div className="row">
                                {/* {
                            !!store.films ?
                                store.films.results.map((film, i) => {
                                    const img = film.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        < div className="card text-white bg-dark col-3 mb-3" key={i}>
                                            <img src={"img/films/" + img} className="card-img-top" alt={"image of " + img} />
                                            <div className="card-body">
                                                <h5 className="card-title">{film.title}</h5>
                                                <p className="card-text">Director: {film.director}</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                <Link to={"/films/" + film.title} className="btn btn-secondary">Go to...></Link>
                                            </div>
                                        </div>
                                    )
                                })
                                : (
                                    <div class="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashAdminBlog;