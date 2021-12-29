import { React, useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

import tags from './assets/json/tags.json';
import genres from './assets/json/genres.json';

function App() {

  // const url = 'https://api.rawg.io/api/platforms?key=41501910137e44f584184130089ac053';
  // axios.get(url)
  //     .then(response => {
  //       localStorage.setItem("platforms", JSON.stringify(response.data.results));
  //     })

  useEffect(() => {

  }, [])


  tags.sort((a, b) => a.id - b.id);
  genres.sort((a, b) => {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
  });

  const [displayResults, setDisplayResults] = useState(false);

  const showResults = () => {
    setDisplayResults(true);
  }

  const showForm = () => {
    setDisplayResults(false);
  }

  return (
    <div className="App">
      <Header />
      {displayResults ?
        <Results showForm={showForm}/>
        :
        <Form showResults={showResults} />
      }
    </div>
  );
}

export default App;
