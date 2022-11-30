import './table.css'
import { v4 as uuid } from 'uuid';
import React , { useEffect, useState } from 'react';
import axios from "axios";
import Input from './Input';



const Table = (props) => {
  const column = props.column;
  const month = props.month;
  const year = props.year;
  const id=props.id;
    const [data, setDataTable] = useState([]);

    useEffect(() => {
        axios('https://6374a46048dfab73a4e470dd.mockapi.io/players')
          .then(res => setDataTable(res.data))
          .catch(err => console.log(err))
}, []);


  return (
    <div>
      
    <table key={uuid()}>
        {/* <thead><tr>{head}</tr></thead>  */}
        
      <thead>
        <tr>
          {column.map((item,index) => (
          <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      {data.map((item,index) =>(
        <tbody key={uuid()}>
            <tr key={index}>
                <td>
                    {item.name}

                </td>
                <td>
                    {item.number}

                </td>
                <td>
                    {/* <input type="checkbox"/> */}
                    <div key={uuid()}>
                        <Input id={id+month+year+item.number+"1"} />
                    </div>
                
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"2"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"3"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"4"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"5"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"6"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"7"} />
                    </div>
                </td>
                <td>
                <div key={uuid()}>
                        <Input id={id+month+year+item.number+"8"} />
                    </div>
                </td>



            </tr>
            
      </tbody>
      
       

      ))}
      
    </table>
   
    </div>
  )
}

// const TableHeadItem = ({ item }) => <th>{item.heading}</th>
// const TableRow = ({ item, column }) => (
//   <tr>
//     {column.map((columnItem, index) => {

//       if(columnItem.value.includes('.')) {
//         const itemSplit = columnItem.value.split('.') //['address', 'city']
//         return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
//       }

//       return <td>{item[`${columnItem.value}`]}</td>
//     })}
//   </tr>
// )

export default Table