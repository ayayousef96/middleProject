import React, {useEffect,useState} from 'react';
import axios from "axios";

import Logo from "../img/Logo.jpg";
import { v4 as uuid } from 'uuid';

const PlayersList = () => {
    const [playersArr,setPlayersArr] =useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                

                const res = await axios.get(
                    "https://6374a46048dfab73a4e470dd.mockapi.io/players"
                );
                
                setPlayersArr(res.data);
                
            }
            catch(e){
                console.log(e);
            }
        }   
        fetchData();
    },[]);

    const displayAllPlayers = () =>{
        return playersArr.map((p) => {
            return <div className='playerCard' key={uuid()}>
            <div className='detailes'>
            <h2>{p.name}</h2>
            <h2>{p.number}</h2>
            <img className='playerImg' alt='player' src={Logo}/>
            </div>
            </div>
        });

    }

    return(<div>
        <center>
            {displayAllPlayers()}
        </center>
    </div>)

    
    
}

export default PlayersList;
