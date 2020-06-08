import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Blog = props => {
    const { store, actions } = useContext(Context)
    const blogger = props.match.params.title;
    return (
        <>
            <div className="blogteiner">
                <div className="card-group">
                    <div className="row">
                        {
                            !!store.blog ?
                                store.blog.map((blo, i) => {
                                    if (JSON.stringify(blo.title) === JSON.stringify(blogger)) {
                                        // const img = blo.title.split(" ").join("-").toLowerCase() + ".jpg";
                                        return (
                                            <div className="row card-group text-white mb-3 d-flex justify-content-center cardbg" key={i}>
                                                <div className="col-3 my-auto">
                                                <img src={store.blogPath + blo.blogimagen} className="card-img-top my-2" alt={"image of " + blo.id} />
                                                    <Link to={"/blogs"} className="btn btn-secondary d-flex justify-content-center blogitem text-white">Back to Blogs!</Link>
                                                </div>
                                                <div className="col-9 py-4">
                                                    <h2 className="card-title">{blo.title}</h2>
                                                    <h5 className="card-text">{blo.bintro}</h5>
                                                    <p className="card-text">{blo.publictext}</p>
                                                    {
                                                        !!store.currentUser ? (
                                                            <p className="card-text">{blo.privatext}</p>
                                                        ) : (
                                                                <h3>If yor are register, you can see all of this!!!</h3>
                                                            )
                                                    }
                                                    <p className="card-text">Release Date: {blo.createdate}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                : (
                                    <div className="text-center" id="undefined">
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

export default Blog;