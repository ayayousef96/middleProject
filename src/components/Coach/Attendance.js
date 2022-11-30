// import axios from 'axios';
import React , {  useState } from 'react';
import Table from './Table';
import { v4 as uuid } from 'uuid';
// import { Link } from 'react-router-dom';
// import { Routes, Route} from "react-router-dom";


const Attendance = () => {
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
  const years=["2022","2023","2024","2022"];
  const[month,setMonth]=useState("");
  const[year,setYear]=useState("");
    // let attendance={};
    // localStorage.attendance = JSON.stringify(attendance);
    // const allcheckbox=document.getElementsByClassName("check");

    function useLocalStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
          if (typeof window === "undefined") {
            return initialValue;
          }
          try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
          }
        });
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = (value) => {
          try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
          } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
          }
        };
        return [storedValue, setValue];
      }
    
  
    const columnNames = ['Name','Number',"1","2","3","4","5","6","7","8"];
    
    //const [arrtables,setarrtables] =useState([]);
    const [arrtables,setarrtables] = useLocalStorage("arrtables",[]);

    
   
    
    
    const createtable = () => {
            const tableid = month+year;
            setarrtables([...arrtables, { id: tableid, month: month , year:year}]);
            // console.log(window.localStorage.getItem(arrtables));
            
            setMonth("");
            setYear("");
    }
    const displaytable = () => {
        return arrtables.reverse().map((t) => {
          return (
            <div key={t.id}>
              <h2>{t.month}/{t.year}</h2>
              <Table
                column={columnNames}
                month={month}
                year={year}
                id={t.id}
                
              />
              
              
            </div>
          );
        });
      };

           

   return(<div key={uuid()}><center>
    <br></br>

        <select key={uuid()} onChange={(event) => setMonth(event.target.value)}>{months.map(m =><option key={uuid()}>{m}</option> )}</select>
        <select key={uuid()} onChange={(event) =>setYear(event.target.value)}>{years.map(y =><option key={uuid()}>{y}</option> )}</select>

    
      <br></br>
      <button onClick={createtable}>
        Add Month
      </button>
      <div key={uuid()}> {displaytable()}</div>
     
    
    </center></div>);
}

export default Attendance;





