import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    register,
    getUser,
    getUserById,
    update,
    delete: _delete
};

const apiURL = 'http://127.0.0.1:8000/api/v1/'

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(apiURL + `login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // login successful if there's a passort token in the response
            if (data.user.token) {
                // store user details and passport token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(data.user));
            }

            return data.user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(apiURL + `register`, requestOptions).then(handleResponse);
}

function getUser() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(apiURL + `client`, requestOptions).then(handleResponse);
}


function getUserById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(apiURL + `client/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(apiURL + `client/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(apiURL + `client/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}