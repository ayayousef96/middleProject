import React , {useState} from 'react';
import"./playerCard.css";
import Logo from "../img/Logo.jpg";
const PlayerCard = (props) => {
    const [playerName,setPlayerName] = useState(props.name);
    const [playerNumber,setPlayerNumber] =useState(props.number);
    setPlayerName(props.name);
    setPlayerNumber(props.number);
    

    return (
        <div className='playerCard'>
            <div className='detailes'>
            <h2>{playerName}</h2>
            <h1>{playerNumber}</h1>
            <img className='playerImg' alt='player' src={Logo}/>
            </div>
            
        </div>
    );
}

export default PlayerCard;
