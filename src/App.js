import './components/LogIn'
import './App.css';
import React, { useState  } from "react";
import LogIn from './components/LogIn';
import "./components/LogIn/LogIn.css";
//import { Router, Routes } from 'react-router-dom'
//import Logo from "./components/img/Logo.jpg";
//import PlayerHome from "./components/Player/PlayerHome";
//import CoachHome from "./components/Coach/CoachHome";
import PlayerApp from './components/Player/playerApp';
import CoachApp from './components/Coach/CoachApp';

function App() {
  const [isPlayer, setIsPlayer] = useState(false);
  const [isCoach, setIsCoach] = useState(false);

  return((!isCoach && !isPlayer) ? <LogIn setIsCoach={setIsCoach} setIsPlayer={setIsPlayer} /> 
        : isPlayer ? <PlayerApp/> : <CoachApp/>
  );
}

export default App;
