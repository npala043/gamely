import { React, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';

function App() {

  // filters is an object consisting of 4 arrays
  const [filters, setFilters] = useState(
    {
      ratings: [],
      platforms: [],
      genres: [],
      tags: []
    }
  );

  // when the user presses the submit button after the form, call this to update the filters and render Results
  const showResults = (ratings, platforms, genres, tags) => {
    setFilters(
      {
        ratings: ratings,
        platforms: platforms,
        genres: genres,
        tags: tags
      }
    );
  }

  // reset filters and thus render Form
  const showForm = () => {
    setFilters(
      {
        ratings: [],
        platforms: [],
        genres: [],
        tags: []
      }
    );
  }

  return (
    <div className="App">
      <Header />
      {/* if there are any filters selected, render Results, otherwise render Form the generate filters */}
      {/* TODO: checking if all are empty is probably not the best way to do this */}
      {filters.ratings.length !== 0 || filters.platforms.length !== 0 || filters.genres.length !== 0 || filters.tags.length !== 0 ?
        <Results showForm={showForm} filters={filters} />
        :
        <Form showResults={showResults} />
      }
    </div>
  );
}

export default App;
