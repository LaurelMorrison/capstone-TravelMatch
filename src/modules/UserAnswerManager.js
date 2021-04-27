const remoteURL = "http://localhost:8088"

const currentUser = parseInt(sessionStorage.getItem("travelmatch_user"));

export const getAllUserAnswers = () => {
    return fetch(`${remoteURL}/useranswers`)
    .then(result => result.json())
};

export const getAnswersByUserId = (currentUser) => {
    return fetch(`${remoteURL}/useranswers/?currentUserId=${currentUser}&_expand=user`)
    .then(result => result.json())
};


export const addNewAnswers = (answer) => {
    return fetch(`${remoteURL}/useranswers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answer)
    }).then(response => response.json())
};