import React ,{useEffect,useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';
//import PlayerCard from '../Player/PlayerCard';
import Logo from "../img/Logo.jpg";


const PlayerOfTheMonth = () => {
    const [data, setDataTable] = useState([]);
    const [playerSelected,setPlayerSelected] =useState("");
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    const years=["2022","2023","2024","2022"];
    const[month,setMonth]=useState("");
    const[year,setYear]=useState("");
    const [players,setplayers]=useState([]);
    //const [add,setadd]=useState(false);

    useEffect(() => {
        axios('https://6374a46048dfab73a4e470dd.mockapi.io/players')
          .then(
            res => setDataTable(res.data)
            
            )
          .catch(err => console.log(err))
          axios('https://6374a46048dfab73a4e470dd.mockapi.io/playerOftheMonth')
          .then(
            res => setplayers(res.data)
            
            )
          .catch(err => console.log(err))
          
          
    }, []);

    const CreatePlayer = async() =>{
        //setadd(true);
        const player = { name: playerSelected, month: month,year:year, id:uuid()};
        const response = await axios.post(
            `https://6374a46048dfab73a4e470dd.mockapi.io/playerOftheMonth`,
            player
          );
        console.log(response);
        setplayers([...players,player]);
        setPlayerSelected("");
        setMonth("");
        setYear("");
    }
   
    const displayPlayers = () =>{
        return players.reverse().map((p) => {
            return <div className='playerCard' key={uuid()} >
                <div className='detailes'>
                <h3>{p.month}</h3>
                <h4>{p.year}</h4>
                <h2>{p.name}</h2>
            
            
            <img className='playerImg' alt='player' src={Logo}/>
            </div>
            </div>
        })
    }
   

    return (
        <div key={uuid()}>
            <center key={uuid()}>
            <h1 key={uuid()}>select player</h1>
            <select  key={uuid()}onChange={(event) => setPlayerSelected(event.target.value)}>{data.map((p) => <option key={uuid()}>{p.name}</option>)}</select>
            <select key={uuid()} onChange={(event) => setMonth(event.target.value)}>{months.map(m =><option key={uuid()}>{m}</option> )}</select>
            <select key={uuid()} onChange={(event) =>setYear(event.target.value)}>{years.map(y =><option key={uuid()}>{y}</option> )}</select>
           
            <button key={uuid} onClick={CreatePlayer}>add</button>
            <div >
            {displayPlayers()}
            </div>
           
            
           
            
           
            </center>
            
            
            
        </div>
    );
}

export default PlayerOfTheMonth;
