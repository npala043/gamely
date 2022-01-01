import { Card } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Meta } = Card;

const GameCard = (props) => {

    // limits to 250 chars and cuts out random <p> at the beginning
    const shortDesc = `${props.game.description.slice(0, 250).substring(3)}...`;

    return (
        <Card
            loading={false}
            style={{ width: 100 }, { borderRadius: '10px' }}
            cover={<img src={props.game.background_image} alt={props.game.name} style={{ borderRadius: '10px' }} />}
            hoverable={true}
            actions={[<PlusSquareOutlined key="add" style={{ fontSize: '40px' }} />]}
        >
            <Meta
                title={props.game.name}
                description={shortDesc}
            />
        </Card>

    )
}

export default GameCard;