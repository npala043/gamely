import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import axios from 'axios';


function App() {

  const [tags, setTags] = useState([]);

  const tagsUrl = 'https://api.rawg.io/api/tags?page_size=40&key=9475b06bb69f43b7a4e3a481475a6ce8';
  axios.get(tagsUrl)
    .then(response => {

    })
    .catch(error => console.log(error));

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
