const remoteURL = "http://localhost:8088"

export const getAllUserAnswers = () => {
    return fetch(`${remoteURL}/userAnswers`)
        .then(result => result.json())
};

export const getAnswerById = (id) => {
    return fetch(`${remoteURL}/userAnswers/${id}`)
        .then(result => result.json())
};


export const addNewAnswers = (answer) => {
    return fetch(`${remoteURL}/userAnswers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answer)
    }).then(response => response.json())
};
