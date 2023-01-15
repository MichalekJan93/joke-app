import React, { useState, useEffect } from 'react';
import { GetJoke } from './api/GetJoke';
import Title from './components/Title';
import Joke from './components/Joke';
import Button from './components/Button';

function App() {

  const [joke, setJoke] = useState('loading ....');
  const [newJoke, setNewJoke] = useState(false);

  useEffect(() => {
    const url = 'https://v2.jokeapi.dev/joke/Any';
    const fetchData = async () => {
      const data = await GetJoke(url);
      setJoke(data);
    }

    fetchData();
  }, [newJoke]);

  const addNewJoke = () => {
      let boolean;
      if(newJoke === false){
        boolean = true;
      } else{
        boolean = false;
      }
      setNewJoke(boolean);
  };

  return (
      <div className='joke-box'>
        <Title />
        <Joke data ={joke} />
        <Button newJoke = {() => {addNewJoke()}}/>
      </div>
  );
}

export default App;
