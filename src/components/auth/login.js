import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./login.css"
import Grid from '@material-ui/core/Grid'
import login1 from "../../images/login1.png";
import login2 from "../../images/login2.png";
import logo from "../../images/logo.png";

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key travelmatch_user in session Storage. Change below if needed!
                    sessionStorage.setItem("travelmatch_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <div className="logoBox">
                        <img className="logoLogin" src={logo} alt="logo" />
                        <img className="login2" src={login2} alt="blob" />
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1 className="loginHeader">Please sign in</h1>
                        <div>
                            <div className="emailInput">
                                <label htmlFor="inputEmail" className="emailInput"> Email address: </label>
                                <input type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    required autoFocus
                                    value={loginUser.email}
                                    onChange={handleInputChange} />
                                <div className="buttonBox">
                                    <button type="submit" className="loginButton">
                                        Sign in
                        </button>
                                </div>
                            </div>
                        </div>
                        <Link to="/register" className="registerLink">Register for an account</Link>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <img className="login1" src={login1} alt="blob" />
                </Grid>
            </Grid>
        </main>
    )
}
