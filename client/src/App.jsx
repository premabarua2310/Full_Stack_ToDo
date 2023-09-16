/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import axios from "axios";
import { baseURL } from "./utils/Constant";

const App = () => {

  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const saveToDo = () => {
    axios
      .post(`$(baseURL)/save`, { toDo: input } 
        .then(res => {
          console.log(res.data);
        }))
  }

  return (
    <main>
      <div className='container'>
        <h1 className="title">ToDo App</h1>
        <div className='input_holder'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Add a ToDo...'
          />
          <button>Add</button>
        </div>
        <div className='list'>
          <ToDo />
          <ToDo />
          <ToDo />
        </div>
      </div>
    </main>
  )
}

export default App