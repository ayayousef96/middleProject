import React, { useState } from "react";
import "./LogIn/LogIn.css";
import Logo from "./img/Logo.jpg";
// import PlayerHome from "./Player/PlayerHome";
// import CoachHome from "./Coach/CoachHome";
//import {Redirect} from "react-router-dom";
//import { Routes, Route} from "react-router-dom";

function LogIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [IsLoged, setLogIn] = useState(false);

    //let history =useHistory();
    async function handleLogin(e) {
        //setLogIn(true);
        e.preventDefault();
        if (password === "1111") {
            console.log("coach logged in");
            props.setIsCoach(true);

        }
        if (password === "1234") {
            console.log("player logged in");
            //history.push("");
            props.setIsPlayer(true);
        }


    }
    return (
        <center>
            <form onSubmit={handleLogin} className='container'>
                <img src={Logo} alt='logo' />
                <br></br>
                <h2>Name</h2>
                <input
                    type="text"
                    value={username}
                    placeholder="enter a username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <h2>Password</h2>
                <input
                    type="password"
                    value={password}
                    placeholder="enter a password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br></br>
                <button type="sumbit" className="login" >Login</button>


            </form>

        </center>
    );
}

export default LogIn;
