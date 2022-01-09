import { React, useState } from 'react';
import '../App.css';
import gamelyLogo from '../assets/images/gamely_logo_rough.png';
import { Modal } from 'antd';

const Header = (props) => {

    const [isModalVis, setModalVis] = useState(false);

    const showModal = () => {
        setModalVis(true);
    }

    const hideModal = () => {
        setModalVis(false);
    }

    return (
        <div className="Header">
            <Modal
                title="About"
                visible={isModalVis}
                closable={false}
                maskClosable={true}
                onCancel={hideModal}
                footer={null}>
                <p>Gamely is a React webapp which generates a list of recommended games queried from the <a href="https://rawg.io/apidocs">RAWG API</a> based on a short survey. Recommendations are created based on preferences for: ESRB rating, recent vs. classic, player number, genres, and platforms.</p>
                <h3>Packages & Libraries Used</h3>
                <ul>
                    <li><a href="https://github.com/ant-design/ant-design">Ant Design</a></li>
                    <li><a href="https://github.com/axios/axios">axios</a></li>
                    <li><a href="https://github.com/mathiasbynens/he">he</a></li>
                    <li><a href="https://github.com/lodash/lodash">lodash</a></li>
                </ul>
            </Modal>
            <img src={gamelyLogo} style={{ width: 124, height: 37, float: 'left' }} />
            <button className='about' onClick={showModal}>About</button>
            <button className='donate'>Donate</button>
        </div>
    )
}

export default Header;