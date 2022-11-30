
import React, {useEffect,useState} from 'react';
import axios from "axios";
import Logo from "../img/Logo.jpg";
import { v4 as uuid } from 'uuid';


function ListCoach() {
   
    const [playersArr,setPlayersArr] =useState([]);
    const [playerName,setPlayerName]=useState("");
    const [playerNumber,setPlayerNumber]=useState("");
    // const [isUpdate,setIsUpdate] =useState(false);
    // const [idtoupdate,setId] =useState("");
    // const [updateName,setUpdateName] = useState("");
    // const [updateNumber,setUpdateNumber] =useState("");

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                
                const res =await axios.get("https://6374a46048dfab73a4e470dd.mockapi.io/players");              
                setPlayersArr(res.data);
                
            }
            catch(e){
                console.log(e);
            }
        }   
        fetchData();
    },[]);


    // const handleName = (event) => {
    //     setUpdateName(event.target.value);
    //    };

    // const handleNumber = (event) => {
    //     setPlayerNumber(event.target.value);
    //    };

    
   const handleDelete = async(id) =>{
    await axios.delete(`https://6374a46048dfab73a4e470dd.mockapi.io/players/${id}`);
    const filteredList = playersArr.filter((p) => {
        return p.id !== id;
      });
      setPlayersArr(filteredList);

    }

    

    const displayPlayers = () =>{
       
        return playersArr.map((p) => {
            return(  <div className='playerCard' key={uuid()}>
                <div className='detailes'>
                <div>{p.name}</div>
                <div>{p.number}</div>
                <img className='playerImg' alt='player' src={Logo}/>
                <button onClick={ () => handleDelete(p.id)}>Delete</button>

                
                
            </div>
            
            
        </div>);
        });

    }
    
    const CreatePlayer = async() =>{
        const player = { name: playerName, number: playerNumber};
        const response = await axios.post(
            `https://6374a46048dfab73a4e470dd.mockapi.io/players`,
            player
          );
        console.log(response);
        setPlayersArr([...playersArr,player]);
        setPlayerName("");
        setPlayerNumber("");
    }

    
    return (
        <div>
             <center>
             <div className="input-container" key={uuid()}>
                <label>Player Name:</label>
                <input onChange={(event) => setPlayerName(event.target.value)} value={playerName}  />
                <label>Player Number:</label>
                <input onChange={(event) => setPlayerNumber(event.target.value)} value={playerNumber}  />
                <button onClick={CreatePlayer}>Add Player</button>
                
            </div>
                {displayPlayers()}
                <div>
                
            </div>
            </center>
            
            
            
        </div>
     );
}


export default ListCoach;
