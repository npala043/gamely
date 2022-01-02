import { useEffect, useState } from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import axios from "axios";

import Games from "./Games";
import List from "./List";

import exampleGames from '../assets/json/testgames.json';

const Results = (props) => {

    const [games, setGames] = useState([]);

    const url = 'https://api.rawg.io/api/games';
    const key = '?key=41501910137e44f584184130089ac053';

    useEffect(() => {

        // const fullUrl = cloneDeep(url.concat(key));
        // if (props.platforms.length > 0) {
        //     fullUrl.concat('&platforms=');
        //     for (let i = 0; i < props.platforms.length; i++) {
        //         fullUrl.concat(`${props.platforms[i]},`);
        //     }
        //     fullUrl.slice(0, props.platforms.length - 1); // not sure if the -1 will cause issues or not
        // }
        // if (props.genres.length > 0) {
        //     fullUrl.concat('&genres=');
        //     for (let i = 0; i < props.genres.length; i++) {
        //         fullUrl.concat(`${props.genres[i]},`);
        //     }
        //     fullUrl.slice(0, props.genres.length - 1); // not sure if the -1 will cause issues or not
        // }
        // if (props.tags.length > 0) {
        //     fullUrl.concat('&tags=');
        //     for (let i = 0; i < props.tags.length; i++) {
        //         fullUrl.concat(`${props.tags[i]},`);
        //     }
        //     fullUrl.slice(0, props.tags.length - 1); // not sure if the -1 will cause issues or not
        // }

        // for testing:
        const fullUrl = `${url}${key}&platforms=4,187&genres=4,3&tags=31,75&page_size=12`;

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
    // }, props.platforms, props.genres, props.tags, props.ratings)

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
                <button style={{color: 'white', backgroundColor: 'black', borderColor: 'purple'}} onClick={props.showForm}>Start over</button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <button onClick={shuffle}>Shuffle me!</button>
            </div>
            <List />
        </div>
    )

}

export default Results;
