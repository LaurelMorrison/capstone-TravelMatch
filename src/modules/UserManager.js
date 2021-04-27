const remoteURL= "http://localhost:8088"

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(result => result.json())
};

export const getUserByName = (name) => {
    return fetch(`${remoteURL}/users?name=${name}`)
    .then(result => result.json())
    
};
export const getSingleUser = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then(res => res.json())
};
