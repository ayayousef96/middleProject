//import React,{useEffect,useState} from 'react';
import "./PlayerHome.css";
// import axios from "axios";
// import PlayerCard from './PlayerCard';
// import { Link } from 'react-router-dom';
// import { Routes, Route} from "react-router-dom";
//import PlayersList from './playersList';
import queens from "../img/queens.jpg"


const PlayerHome = () => {
    
    return (
        <div className='player'>
            
            <h1>welcome </h1>
            <img alt="queens" src={queens} className="queens"/>
          
        </div>
    );
}

export default PlayerHome;
