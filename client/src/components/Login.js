import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


const Login = props => {
    const [login, setLogin] = useState({username: "", password: ""})

    const handleChange = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLogin({username: "", password: ""})
        
        axiosWithAuth().post("./login", login)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            props.history.push("/bubbles")
        })
        .catch(err => console.log(err))
        setLogin({username: "", password: ""})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={handleChange}
                    placeholder="username"
                    />
                <input
                    type="text"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="password"
                    />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login;