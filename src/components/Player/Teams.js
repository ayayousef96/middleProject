import React,{useEffect,useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';


const Teams = () => {
    const [teamsArr,setTeamsArr]=useState([]);
    // const[team1,setTeam1]=useState([]);
    // const[team2,setTeam2]=useState([]);

    // teamsArr ===[] ? setTeam1([]) : setTeam2([]);


    useEffect(() => {
        axios('https://6374a46048dfab73a4e470dd.mockapi.io/users')
        .then(
          res => setTeamsArr(res.data)
          )
        .catch(err => console.log(err))
        
        // axios('https://6374a46048dfab73a4e470dd.mockapi.io/users')
        // .then(
        //   res => setTeam2(res.data[1])
        //   )
        // .catch(err => console.log(err))
        
  }, []);

    // const displayTeam1 = () => {
        
       
    //         return <div key={uuid()}>
    //             <h3>{team1}</h3>
    //         </div>
        
    // }
//     const display =() =>{
        
//         return <div key={uuid()}>
//             <h3>{team1.players.map((p) =><h4>{p}</h4>)}</h3>
//         </div>
    
// // }
//     const display1 = () => {
//         setTeam1(teamsArr[0].players);
//         return( <div key={uuid()}>
//         {team1.players.map((p) => <h4>{p}</h4>)}
//     </div>);

    //}
    const displayTeams = () => {
        return teamsArr.map((t) => {
            return (<div className='team' key={uuid()}>
                {t.players.map((n) => <h3 key={uuid()}>{n}</h3>)}

            </div>

            )
        })

    }

    return (
        <center>
            {displayTeams()}

        </center>

    );
}

export default Teams;
