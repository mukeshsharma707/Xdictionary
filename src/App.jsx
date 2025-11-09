import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [data, setData] = useState('');
  const[allData,setAllData]=useState([

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]);
console.log(allData);
const [definition,setDefinition]=useState([]);

const handleSearch=()=>{
const result=allData.filter((item)=>
item.word.toLowerCase() == data.toLowerCase());
setDefinition(result);

}

console.log('i am here',definition);


  const handleChange=(e)=>{
setData(e.target.value);
console.log(e.target.value);
  }

  return (
    <>
    <h1>Dictionary App</h1>
    <input type='text' value={data} placeholder='Search for a word....' onChange={handleChange}></input>
    <button onClick={handleSearch}> Search</button>
    <br/>
    <label><h3>Definition:</h3></label>
    {definition>0?(<p>{definition[0].meaning}</p>):(<p>Word not found in the dictionary.</p>)}
    
    </>
  )
}

export default App
