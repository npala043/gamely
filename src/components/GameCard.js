import { GoDiffAdded } from 'react-icons/go';

const GameCard = (props) => {

    // limits to 250 chars and cuts out random <p> at the beginning
    const shortDesc = `${props.game.description.slice(0, 101).substring(3)}...`;

    return (
        <div className='game-card'>
            <img className='game-img' src={props.game.background_image} alt={props.game.name} />
            <div className='game-info'>
                <h2 className='game-title'>{props.game.name}</h2><button className='game-add-button'><GoDiffAdded /></button>
                <p className='game-desc'>{shortDesc}</p>
            </div>
        </div>

        // <Card
        //     loading={false}
        //     style={{ width: 100 }, { borderRadius: '10px' }}
        //     cover={<img src={props.game.background_image} alt={props.game.name} style={{ borderRadius: '10px' }} />}
        //     hoverable={true}
        //     actions={[<PlusSquareOutlined key="add" style={{ fontSize: '40px' }} />]}
        // >
        //     <Meta
        //         title={props.game.name}
        //         description={shortDesc}
        //     />
        // </Card>

    )
}

export default GameCard;