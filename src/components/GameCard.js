import { GoDiffAdded } from 'react-icons/go';
import { ImTwitch } from "react-icons/im";
import he from 'he';

const GameCard = (props) => {

    const handleFavButton = () => {
        props.addToFavs(props.game);
    }

    // limits to 250 chars and cuts out random <p> at the beginning
    const shortDesc = `${he.decode(props.game.description.slice(0, 101)).substring(3)}...`;

    return (
        <div className='game-card'>
            <img className='game-img' src={props.game.background_image} alt={props.game.name} />
            <div className='game-info'>
                <h2 className='game-title'>{props.game.name}</h2>{props.addToFavs !== null ? <button className='game-add-button' onClick={handleFavButton}><GoDiffAdded /></button> : ""}
                <ul className='social-list'>
                    <li className='social-link'>
                        <a href={`https://www.twitch.tv/directory/game/${props.game.slug.replace(new RegExp('-', 'g'), ' ')}`} target="_blank" style={{ color: "#6441a5" }}>
                            <ImTwitch />
                        </a>
                    </li>
                </ul>
                <p className='game-desc'>{shortDesc}</p>
            </div>
        </div>
    )
}

export default GameCard;