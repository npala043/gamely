import { useState } from "react";
import Games from "./Games";
import List from "./List";

import exampleGames from '../assets/json/testgames.json';

const Results = (props) => {

    //generate list of games to display and pass to Games
    const [games, setGames] = useState(exampleGames);

    const shuffle = () => {
        setGames(games.splice(0, 3));
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