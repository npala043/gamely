import '../App.css';
import  gamelyLogo from '../assets/images/gamely_logo_rough.png';

const Header = (props) => {
    return (
        <div className= "Header">
            <img src={gamelyLogo} style={{width: 124, height: 37, float: 'left'}}/>
            <button className='about'>About</button>
            <button className='donate'>Donate</button>
        </div>
    )
}

export default Header;