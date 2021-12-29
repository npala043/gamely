import { Card } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Meta } = Card;

const GameCard = (props) => {
    return (
        <Card
            loading={false}
            style={{ width: 350 }}
            cover={<img src={props.game.background_image} alt={props.game.name} />}
            hoverable={true}
            actions={[<PlusSquareOutlined key="add" style={{ fontSize: '40px' }} />]}
        >
            <Meta
                title={props.game.name}
                description={props.game.description}
            />
        </Card>

    )
}

export default GameCard;