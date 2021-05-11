import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./login.css"
import Grid from '@material-ui/core/Grid'
import register1 from "../../images/register1.png";
import register2 from "../../images/register2.png";
import logo from "../../images/logo.png";

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.name}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key travelmatch_user in session Storage. Change below if needed!
                                sessionStorage.setItem("travelmatch_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <img className="logo" src={logo} alt="logo" />
                    </Grid>
                    <Grid item xs={2}>
                        <img className="register1" src={register1} alt="blob" />
                    </Grid>
                    <Grid item xs={8} jutify="center">
                        <Grid item xs={12} >
                            <h1 className="h3">Create an Account</h1>
                        </Grid>
                        <Grid item xs={12} >
                            <div className="formBox">
                                <div className="nameBox" >
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" name="name" id="name" className="form-control" required autoFocus value={registerUser.name} onChange={handleInputChange} />
                                </div>

                                <div>
                                    <label htmlFor="inputEmail">  Email address: </label>
                                    <input type="email" name="email" id="email" className="form-control" required value={registerUser.email} onChange={handleInputChange} />
                                </div>
                                <div className="submitButtonSection">
                                    <button type="submit" className="button"> Register </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <img className="register2" src={register2} alt="blob" />
                    </Grid>
                </Grid>
            </form>
        </main>
    )
}
