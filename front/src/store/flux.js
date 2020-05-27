const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            errors: null,
            currentUser: null,
            email: '',
            password: '',
        },

        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
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
                                isAuthenticated: true,
                                email: '',
                                password: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/");
                        }
                    })
            },
        }
    }
}



export default getState;