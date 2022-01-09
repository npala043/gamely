import { React, useEffect, useState } from "react";
import * as cloneDeep from 'lodash/cloneDeep';
import axios from "axios";
import { notification } from "antd";

import Games from "./Games";
import List from "./List";

const Results = (props) => {

    const [favs, setFavs] = useState([]);

    const addToFavs = (game) => {
        if (!favs.includes(game)) {
            let currFavs = cloneDeep(favs);
            currFavs.push(game);
            setFavs(currFavs);
        } else {
            openNotificationWithIcon('error');
        }
    }
    
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Error',
            description: 'Already added to list!',
            duration: 3,
            style: {
                backgroundColor: "#2E2E2E",
                fontFamily: "Rubik",
                fontWeight: "normal",
                color: "white",
                closeIcon: (<div></div>)
            }
        });
    };

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
        }
        if (props.filters.genres.length > 0) {
            fullUrl = fullUrl.concat('&genres=');
            for (let i = 0; i < props.filters.genres.length; i++, fullUrl = fullUrl.concat(',')) {
                fullUrl = fullUrl.concat(`${props.filters.genres[i]}`);
            }
        }
        if (props.filters.tags.length > 0) {
            fullUrl = fullUrl.concat('&tags=');
            for (let i = 0; i < props.filters.tags.length; i++, fullUrl = fullUrl.concat(',')) {
                fullUrl = fullUrl.concat(`${props.filters.tags[i]}`);
            }
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
            <h1 style={{ color: 'white' }}>Shuffle through some</h1>
            <h1 style={{ color: 'cyan', paddingTop: 0 }}>new games!</h1>
            <Games games={games} addToFavs={addToFavs} />
            <div>
                <button style={{ color: 'white', backgroundColor: 'black', borderColor: 'purple' }} onClick={props.showForm}>Start over</button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <button onClick={shuffle}>Shuffle me!</button>
            </div>
            <List favs={favs} />
        </div>
    )

}

export default Results;
