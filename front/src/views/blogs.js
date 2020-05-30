import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Blogs = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="blogteiner">
                <h1>Bienvenido a nuestro Blog!</h1>
                <div class="card-deck">
                    <div className="row d-flex justify-content-center">
                        {
                            !!store.blog ?
                                store.blog.map((blo, i) => {
                                    // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <>
                                            <div className="col-xl-4 col-lg-6 col-md-8 col-xs-12">
                                                <div className="card text-white bg-dark mb-3 blogitem text-white" key={i}>
                                                    {/* <img src={"img/films/" + img} className="card-img-top" alt={"image of " + img} /> */}
                                                    <img src="http://placehold.it/300x200" className="card-img-top my-2" alt={"image of " + blo.id} />
                                                    {/* <a classNam="text" id="overlay">GO!</a> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title">{blo.title}</h5>
                                                        <p className="card-text text-justify">{blo.bintro}</p>
                                                    </div>
                                                    <div class="card-footer">
                                                        <small class="text-muted">{blo.createdate}</small>
                                                    </div>
                                                    <Link type="button" className="btn btn-light" to={"/blogs/" + blo.title}>Ir</Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                : (
                                    <div class="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs;