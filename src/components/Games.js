import GameCard from './GameCard.js';

const Games = (props) => {

    let currGames = [];

    if (props.games.length >= 3) {
        for (let i = 0; i < 3; i++) {
            currGames.push(props.games[i]);
        }
    } else if (props.games.length > 0) {
        currGames = props.games;
    } else {
        // no more games to display!
        alert("No more games to display!");
    }

    return (
        <div className="gamesDiv">
            {currGames.map(g => <GameCard game={g} key={g.id} />)}
        </div>
    )
}

export default Games;