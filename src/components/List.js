import GameCard from "./GameCard";

const List = (props) => {
    return (
        <div className="listDiv">
            {props.favs.map(f => <GameCard game={f} key={f.id} addToFavs={null} />)}
        </div>
    )
}

export default List;