import React , {useState,useEffect} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';
import "./playerCard.css"
import Logo from "../img/Logo.jpg";
import "./PlayerHome.css"

const PlayerOftheMonthPage = () => {
    const [players,setplayers]=useState([]);

    useEffect(() => {
          axios('https://6374a46048dfab73a4e470dd.mockapi.io/playerOftheMonth')
          .then(
            res => setplayers(res.data)
            
            )
          .catch(err => console.log(err))
          
          
    }, []);

    const displayPlayers = () =>{
        return players.reverse().map((p) => {
            return <div className='playerCard' key={uuid()}>
                <div className='detailes'>
                <h4>{p.month}</h4>
                <h4>{p.year}</h4>
                <h2>{p.name}</h2>
            
            
            <img className='playerImg' alt='player' src={Logo}/>
            </div>
            </div>
        })
    }
    
    return (
        <center key={uuid()}>
            {displayPlayers()}
            
        </center>
    );
}

export default PlayerOftheMonthPage;
