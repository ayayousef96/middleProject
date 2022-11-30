import React,{useEffect,useState} from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';
import "./coach.css"


const DivideRandomTeams = () => {

    const [data, setDataTable] = useState([]);
    const [players,setplayers]= useState([]);
    const [players2,setplayers2]= useState([]);
    // const[team1,setTeam1]=useState([]);
    // const[team2,setTeam2]=useState([]);

    useEffect(() => {
        axios('https://6374a46048dfab73a4e470dd.mockapi.io/players')
          .then(
            res => setDataTable(res.data)
            
            )
          .catch(err => console.log(err))
          
          
          
    }, []);
    const display =() =>{
        return players.map((p) => {
            return <div key={uuid()}>
                <h3>{p}</h3>
            </div>
        })
        
    }
    const display2 =() =>{
        return players2.map((p) => {
            return <div key={uuid()}>
                <h3>{p}</h3>
            </div>
        })
    }
    const clearteams = async() => {
        const res = await axios.get('https://6374a46048dfab73a4e470dd.mockapi.io/users');
        const cuurteams=res.data;
       const Ids = cuurteams.map((t) => t.id)
       return Ids.map((id) => deleteTeam(id));
    }
    const deleteTeam = async(id) => {
        const res= await axios.delete(`https://6374a46048dfab73a4e470dd.mockapi.io/users/${id}`);
        console.log(res);

    }
    // const randomTeams =()=>{
    //     let i=0;
    //     let tempTeam1=[],tempTeam2=[];
    //     const items =players;
    //     while(items.length >0){
    //         const random =Math.floor(Math.random()* items.length);
    //         i%2===0 ? tempTeam1.push(items[random]) : tempTeam2.push(items[random]);
    //         items.splice(random,1);
    //         i++;
    //     }
    //     setTeam1(tempTeam1);
    //     setTeam2(tempTeam2);
    // }
    const createTeam = async(team1) =>{
        const team = {team : team1 , players:players }
        const response = await axios.post(
            `https://6374a46048dfab73a4e470dd.mockapi.io/users`,
           team
          )
        console.log(response);


    }
    return (
        <center key={uuid()}>
             {/* <select  key={uuid()}onChange={(event) => setplayers([...players,event.target.value])}>{data.map((p) => <option key={uuid()}>{p.name}</option>)}</select> */}
             {/* {console.log(players)}
             <select name="player"  key={uuid()}onChange={(event) => setplayers([...players,event.target.value])}>{data.map((p) => <option key={uuid()}>{p.name}</option>)}</select>
             {display()} */}
             <br>
             </br>
             <br></br>
            <button onClick={clearteams}>new teams</button>
             <div className="team1">
                <h5>select team1 players</h5>
             <select name="player"  key={uuid()}onChange={(event) => setplayers([...players,event.target.value])}>{data.map((p) => <option key={uuid()}>{p.name}</option>)}</select>
                
                {display()}
             <button onClick={()=>createTeam(players)}>create team</button>
             </div>
             <div  className="team1">
                <h5>select team2 players</h5>
             <select  key={uuid()}onChange={(event) => setplayers2([...players2,event.target.value])}>{data.map((p) => <option key={uuid()}>{p.name}</option>)}</select>
             {display2()}
             <button onClick={() => createTeam(players2)}>create team</button>
             
             </div>
             
            
            
        </center>
    );
}

export default DivideRandomTeams;
