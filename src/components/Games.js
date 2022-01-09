import GameCard from './GameCard.js';

const Games = (props) => {

    let currGames = [];

    if (props.games.length === 0) {
        // no more games to display!
        console.log("no more games to display");
    }

    for (let i = 0; i < 3; i++) {
        // as there are no indexOutOfBounds errors, check if index returns 'undefined'
        if (typeof props.games[i] !== "undefined") {
            currGames.push(props.games[i].data);
        }
    }

    return (
        <div className="gamesDiv">
            {currGames.length > 0 ?
                currGames.map(g => <GameCard game={g} key={g.id} addToFavs={props.addToFavs} />)
                :
                <h2>You've reached the end!</h2>}
        </div>
    )
}

export default Games;