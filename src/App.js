import React, {useEffect} from 'react';
// import './App.css';
import NumberCounter from './components/NumberCounter';
import Employees from './/components/Employees.json'
import Cards from './components/Cards';

function App() {

// useEffect(() => {
//   alert('Welcome to sidehustle')
// }, [])
//   return (
//     <div className="App">


//       <NumberCounter/>
//       {console.log(Employees)}
//       <p>{Employees[0].name}</p>
//       <p>{Employees[0].age}</p>
    




//     </div>
// );

  const fetchPost = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    console.log(response)
  }

  fetchPost()
    return(
      <div className='App'>
          <h1>sidehustle</h1>
          <Cards/>
      
       </div>
    )
   
}

// const userJSONData = `{
//   "name": "Alex C",
//   "age": 2,
//   "city": "Houston"

// }`

// const userObj = JSON.parse(userJSONData);
// console.log(userObj);

// const userObj = {
//   name: 'bbb C', 
//   age: 4, 
//   city: 'Houston'
// }

// const userJSONData = JSON.stringify(userObj);
// console.log(userJSONData);





export default App;
