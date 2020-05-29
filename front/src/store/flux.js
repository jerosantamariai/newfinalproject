const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            errors: null,
            success: null,
            isAuth: false,
            currentUser: null,
            name: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            oldpassword: '',
            c_name: '',
            c_lastname: '',
            c_email: '',
            c_phone: '',
            c_text: '',
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
                    method: 'POST',
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
                        c_name: store.c_name,
                        c_lastname: store.c_lastname,
                        c_email: store.c_email,
                        c_phone: store.c_phone,
                        c_text: store.c_text,
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
                                c_name: '',
                                c_lastname: '',
                                c_email: '',
                                c_phone: '',
                                c_text: '',
                                errors: null
                            })
                            history.push("/dashboard");
                        }
                    })
            },
        }

    }
}



export default getState;