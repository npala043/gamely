import { React, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

import tags from './assets/json/tags.json';
import genres from './assets/json/genres.json';

function App() {

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
