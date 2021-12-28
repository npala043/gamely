import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import axios from 'axios';

import tags from './assets/json/tags.json';
import genres from './assets/json/genres.json';

function App() {

  tags.sort((a, b) => a.id - b.id);
  genres.sort((a, b) => {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
  });

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
