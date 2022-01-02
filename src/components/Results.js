import { React, useEffect, useState } from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import axios from "axios";

import Games from "./Games";
import List from "./List";

const Results = (props) => {

    const [games, setGames] = useState([]);

    const url = 'https://api.rawg.io/api/games';
    const key = '?key=41501910137e44f584184130089ac053';

    useEffect(() => {

        // build the url by appending the platforms, genres, and tags query params

        let fullUrl = cloneDeep(url.concat(key));
        if (props.filters.platforms.length > 0) {
            fullUrl = fullUrl.concat('&platforms=');
            for (let i = 0; i < props.filters.platforms.length; i++, fullUrl = fullUrl.concat(',')) {
                fullUrl = fullUrl.concat(`${props.filters.platforms[i]}`);
            }
            fullUrl = fullUrl.slice(0, fullUrl.length - 1);
        }
        if (props.filters.genres.length > 0) {
            fullUrl = fullUrl.concat('&genres=');
            for (let i = 0; i < props.filters.genres.length; i++, fullUrl = fullUrl.concat(',')) {
                fullUrl = fullUrl.concat(`${props.filters.genres[i]}`);
            }
            fullUrl = fullUrl.slice(0, fullUrl.length - 1);
        }
        if (props.filters.tags.length > 0) {
            fullUrl = fullUrl.concat('&tags=');
            for (let i = 0; i < props.filters.tags.length; i++, fullUrl = fullUrl.concat(',')) {
                fullUrl = fullUrl.concat(`${props.filters.tags[i]}`);
            }
            fullUrl = fullUrl.slice(0, fullUrl.length - 1);
        }

        axios.get(fullUrl)
            .then(response => {
                const requests = [];
                for (let i = 0; i < response.data.results.length; i++) {
                    requests.push(axios.get(`${url}/${response.data.results[i].id}${key}`));
                }
                axios.all(requests).then(axios.spread((...responses) => {
                    setGames(responses);
                }))
            })
            .catch(error => console.log(error));
    }, []);

    const shuffle = () => {
        const nextGames = cloneDeep(games);
        nextGames.splice(0, 3);
        setGames(nextGames);
    }

    return (
        <div className="resultsPage">
            <h1>Shuffle through some new games!</h1>
            <Games games={games} />
            <div>
                <button onClick={props.showForm}>Start over</button><button onClick={shuffle}>Shuffle me!</button>
            </div>
            <List />
        </div>
    )

}

export default Results;
