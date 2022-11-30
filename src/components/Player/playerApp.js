import React from 'react';
import "./PlayerHome.css";
//import axios from "axios";
//import PlayerCard from './PlayerCard';
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import PlayersList from './playersList';
import PlayerHome from './PlayerHome';
import PlayerOftheMonthPage from './PlayerOftheMonthPage';
import Teams from './Teams';

const PlayerApp = () => {
    return (
        <div>
            <nav className='Nav'>
                <ul>
                <li>
                    <Link to="/Home/*" >Home</Link>
                </li>  
                <li>
                    <Link to="/Players">Players</Link>
                </li>
                <li>
                    <Link to="/playerOfTheMonth">Player of the month</Link>
                </li>
                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                </ul>
                
            </nav>
            <Routes>
                <Route path="/Home/*" element={<PlayerHome/>}/>
                <Route path="/Players" element={<PlayersList/>} />
                <Route path="/playerOfTheMonth" element={<PlayerOftheMonthPage/>} />
                <Route path='/teams' element={<Teams/>}/>

               
            </Routes>
            
        </div>
    );
}

export default PlayerApp;
