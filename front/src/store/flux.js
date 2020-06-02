const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            errors: null,
            success: null,
            isAuth: false,
            currentUser: null,
            blog: null,
            users: null,
            name: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            oldpassword: '',
            cont_name: '',
            cont_lastname: '',
            cont_email: '',
            cont_phone: '',
            cont_message: '',
            title: '',
            bintro: '',
            publictext: '',
            privatext: '',
            blogid: '',
            app_name: '',
            app_lastname: '',
            app_email: '',
            app_phone: '',
            app_time: '',
            app_message: '',
            role_id: '',
        },

        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            isAuth: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuth: sessionStorage.getItem('isAuth')
                    })
                }
            },

            login: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            const action = getActions()
                            action.getusers(store.path + "/users/");
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuth: true,
                                email: '',
                                password: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuth', true)
                            history.push("/dashboard");
                        }
                    })
            },

            register: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/register', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            const action = getActions()
                            action.getUsers(store.path + "/users/");
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                blog: data,
                                currentUser: data,
                                isAuth: true,
                                email: '',
                                password: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuth', true)
                            history.push("/dashboard");
                        }
                    })
            },

            changePassword: (e, history) => {
                e.preventDefault();
                const store = getStore();
                const { access_token } = store.currentUser;

                fetch(store.path + '/changepassword', {
                    method: 'POST',
                    body: JSON.stringify({
                        oldpassword: store.oldpassword,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json', //estoy enviando en formato json
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                            if (data.status === 401) {
                                getActions().logout();
                                history.push("/login")
                            }
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                success: data,
                                oldpassword: '',
                                password: '',
                                errors: null
                            })
                            history.push("/")
                        }
                    })
            },

            logout: () => {
                setStore({
                    currentUser: null,
                    isAuthenticated: false,
                    email: '',
                    password: '',
                    errors: null
                })
                sessionStorage.removeItem('currentUser');
                sessionStorage.removeItem('isAuthenticated');
            },

            setUserInfo: (e, history) => {
                e.preventDefault();
                const store = getStore();
                const { access_token } = store.currentUser;

                fetch(store.path + '/users/' + store.currentUser.users.id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        name: store.name,
                        lastname: store.lastname,
                        email: store.email,
                        phone: store.phone
                    }),
                    headers: {
                        'Content-Type': 'application/json', //estoy enviando en formato json
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                success: data,
                                name: '',
                                lastname: '',
                                email: '',
                                phone: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuth', true)
                            history.push("/")
                        }
                    })
            }, //AQUI TENGO PROBLEMAS

            contact: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/contact', {
                    method: 'POST',
                    body: JSON.stringify({
                        cont_name: store.cont_name,
                        cont_lastname: store.cont_lastname,
                        cont_email: store.cont_email,
                        cont_phone: store.cont_phone,
                        cont_message: store.cont_message,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                cont_name: '',
                                cont_lastname: '',
                                cont_email: '',
                                cont_phone: '',
                                cont_message: '',
                                errors: null
                            })
                            history.push("/");
                        }
                    })
            },

            loadBlog: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/blog', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: store.title,
                        bintro: store.bintro,
                        publictext: store.publictext,
                        privatext: store.privatext,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                blog: data,
                                title: '',
                                bintro: '',
                                publictext: '',
                                privatext: '',
                                errors: null,
                            })
                            history.push("/blogs");
                        }
                    })
            },

            getBlogs: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        // const newData = data.map((elem) => {
                        //     return { ...elem, title: elem.title.replace(/[!@#$%^&*(),.?":{}|<> ]/g, '_')}
                        // })                       
                        // console.log(newData);
                        setStore({
                            blog: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getUsers: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        // const newData = data.map((elem) => {
                        //     return { ...elem, title: elem.title.replace(/[!@#$%^&*(),.?":{}|<> ]/g, '_')}
                        // })                       
                        // console.log(newData);
                        setStore({
                            users: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            deleteBlogs: (id) => {
                const store = getStore();
                fetch(store.path + "/blog/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.error(data)
                        if (data.msg === "Blog borrado") {
                            const action = getActions()
                            action.getBlogs(store.path + "/blog/");
                            setStore({
                                success: data
                            })
                        } else {
                            setStore({
                                error: data
                            })
                        }
                    })
            },

            deleteUsr: (id, history) => {
                const store = getStore();
                fetch(store.path + "/users/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.error(data)
                        if (data.msg === "Usuario borrado") {
                            const action = getActions()
                            action.getUsers(store.path + "/users/");
                            setStore({
                                success: data
                            })
                        } else {
                            setStore({
                                error: data
                            })
                        }
                        history.push("/dashboard/dashadminuser");
                    })
            },

            getCurrent: (blogid, title, bintro, publictext, privatext) => {
                setStore({
                    blogid,
                    title,
                    bintro,
                    publictext,
                    privatext,
                })
            },

            setBlog: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/blog/' + store.blogid, {
                    method: 'PUT',
                    body: JSON.stringify({
                        title: store.title,
                        bintro: store.bintro,
                        publictext: store.publictext,
                        privatext: store.privatext,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                blog: data,
                                title: '',
                                bintro: '',
                                publictext: '',
                                privatext: '',
                                blogid: '',
                                errors: null,
                            })
                            history.push("/blogs");
                        }
                    })
            },

            loadAppointment: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/appointment', {
                    method: 'POST',
                    body: JSON.stringify({
                        app_name: store.app_name,
                        app_lastname: store.app_lastname,
                        app_email: store.app_email,
                        app_time: store.app_time,
                        app_phone: store.app_phone,
                        app_message: store.app_message,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                app_name: '',
                                app_lastname: '',
                                app_email: '',
                                app_phone: '',
                                app_time: '',
                                app_message: '',
                                errors: null
                            })
                            history.push("/");
                        }
                    })
            },

            changeRole: () => {
                const store = getStore();

                fetch(store.path + '/setrole/' + store.currentUser.users.id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        role_id: store.role_id
                    }),
                    headers: {
                        'Content-Type': 'application/json', //estoy enviando en formato json
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            const action = getActions()
                            action.getUsers(store.path + "/users/");
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                success: data,
                                role_id: '',
                                errors: null
                            })
                        }
                    })
            },
        }

    }
}



export default getState;