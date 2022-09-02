import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Joke() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        setJoke(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getJoke();
  }, [])

  return (
    <div>
      {joke && (
        <p>Joke: {joke.joke}</p>
      )}
      {!joke && <p>Loading</p>}
    </div>
  )
}
