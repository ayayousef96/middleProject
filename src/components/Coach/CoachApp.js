import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import CoachHome from './CoachHome';
import ListCoach from './ListCoach';
import Attendance from './Attendance';
import PlayerOfTheMonth from './PlayerOfTheMonth';
import DivideRandomTeams from './DivideRandomTeams';

const CoachApp = () => {
    return (
        <div>
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
                    <Link to="/Attendance">Attendance</Link>
                </li>
                <li>
                    <Link to="/playerofthemonth">Player of the month</Link>
                </li>
                <li>
                    <Link to="/teams">select teams</Link>
                </li>

                
                </ul>
                
            </nav>
            <Routes>
                
                <Route path="/Players" element={<ListCoach/>} />
                <Route path="/Attendance" element={<Attendance/>} /> 
                <Route  path="/playerofthemonth" element={<PlayerOfTheMonth/>}/>
                <Route path="/teams" element={<DivideRandomTeams/>}></Route>
                <Route path="/Home/*" element={<CoachHome/>}/>
               
            </Routes>
            
        </div>
            
        </div>
    );
}

export default CoachApp;
