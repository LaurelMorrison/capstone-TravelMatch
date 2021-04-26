const remoteURL= "http://localhost:8088"

export const getAllQuestions = () => {
    return fetch(`${remoteURL}/questions`)
    .then(result => result.json())
};