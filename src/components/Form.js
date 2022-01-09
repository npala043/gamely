import 'antd/dist/antd.css';
import React, { createRef } from "react";
import '../App.css';
import PCButton from '../assets/images/PCButton.png'
import MobileButton from '../assets/images/MobileButton.png'
import PlayStationButton from '../assets/images/PlayStationButton.png'
import SwitchButton from '../assets/images/SwitchButton.png'
import XboxButton from '../assets/images/XboxButton.png'

const Form = (props) => {

    let scrollDiv = createRef();

    //Arrays of tags to throw into the API
    let ratings = [];
    let platforms = [];
    let genres = [];
    let tags = [];

    //Takes user to showResults
    const handleSubmit = (ratings, platforms, genres, tags) => {
        props.showResults(ratings, platforms, genres, tags);
        // if(all arrays empty) {
        //     send error message
        // }
    }

    //Loads the arrays with the tags from the checkboxes
    const changeButton = (e, tagArray) => {
        let index;
        if (e.target.checked) {
            tagArray.push(+e.target.value)
        }
        else {
            index = tagArray.indexOf(+e.target.value)
            tagArray.splice(index, 1)
        }
        console.log(tagArray)
    }

    //Scroll to form
    const scrollToForm = () => {
        scrollDiv.current.scrollIntoView();
    }

    return (
        <div>
            <div className="pageDiv" style={{opacity: 0.8, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(https://assets.wallpapersin4k.org/uploads/2017/10/Video-Games-Characters-Wallpapers-10.jpg)'}}>
                <h1 style={{color: 'white'}}>Find your next</h1>
                <h1 style={{color: 'cyan', paddingTop: 0}}>Favourite Game</h1>
                <button className="scrollButton" onClick={scrollToForm}>Begin Questionaire</button>
            </div>
            <div className="pageDivExtra">

            </div>

            <div ref={scrollDiv}></div>
            
                <div>
                    <h2 className="formTitle" style={{color: 'grey', fontWeight: 'bold'}}>What is your preferred rating?</h2>
                    <input id="rating1" type="checkbox" value="0" disabled onChange={(e) => changeButton(e, ratings)}/>
                    <label className="formButton"  for="rating1">E[Everyone]</label>

                    <input id="rating2" type="checkbox" value="1" disabled onChange={(e) => changeButton(e, ratings)}/> 
                    <label className="formButton"  for="rating2">Teen[Ages 13+] </label>

                    <input id="rating3" type="checkbox" value="2" disabled onChange={(e) => changeButton(e, ratings)}/>
                    <label className="formButton"  for="rating3">Mature[Ages 18+] </label>

                    <input id="rating4" type="checkbox" value="" disabled onChange={(e) => changeButton(e, ratings)}/>
                    <label className="formButton"  for="rating4">No preference  </label>
                </div>
                <br/>

                <div>
                    <h2 className="formTitle" style={{color: 'white', fontWeight: 'bold'}}>How many players?</h2>
                    <input id="players1" type="checkbox" value="31" onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="players1">Singleplayer</label>

                    <input id="players2" type="checkbox" value="18" onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="players2">Co-op(up to 4 players)</label>
                    
                    <input id="players3" type="checkbox" value="7" onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="players3">Online Multiplayer</label>
                    
                    <input id="players4" type="checkbox" value="" onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="players4">No preference</label>

                </div>
                <br/>
               
                <div>
                    <h2 className="formTitle" style={{color: 'grey', fontWeight: 'bold'}}>How old do you prefer your games?</h2>
                    <input id="age1" type="checkbox" value="0" disabled onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="age1">Classic (6 years and older)</label>

                    <input id="age2" type="checkbox" value="1" disabled onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="age2">Recent (Less than 5 years old)</label>

                    <input id="age3" type="checkbox" value="" disabled onChange={(e) => changeButton(e, tags)}/>
                    <label className="formButton"  for="age3">No preference</label>
                </div>
                <br/>

                <div className="tagList">
                    <h2 className="formTitle" style={{color: 'white', fontWeight: 'bold'}}>Select your favourite genre(s)</h2>
                    <input type="checkbox" id="tag1" value="4" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag1">Action</label>

                    <input type="checkbox" id="tag2" value="51" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag2">indie</label>

                    <input type="checkbox" id="tag3" value="3" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag3">Adventure</label>

                    <input type="checkbox" id="tag4" value="5" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag4">RPG</label>

                    <input type="checkbox" id="tag5"value="10" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag5">Strategy</label>

                    <input type="checkbox" id="tag6" value="2" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag6">Shooter</label>

                    <input type="checkbox" id="tag7" value="40" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag7">Casual</label>

                    <input type="checkbox" id="tag8" value="14" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag8">Simulation</label><br/><br/><br/>

                    <input type="checkbox" id="tag9" value="7" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag9">Puzzle</label>

                    <input type="checkbox" id="tag10" value="11" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag10">Arcade</label>

                    <input type="checkbox" id="tag11" value="83" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag11">Platformer</label>

                    <input type="checkbox" id="tag12" value="1" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag12">Racing</label>

                    <input type="checkbox" id="tag13"value="59" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag13">Massively Multiplayer</label>

                    <input type="checkbox" id="tag14" value="15" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag14">Sports</label>

                    <input type="checkbox" id="tag15"value="6" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag15">Fighting</label>

                    <input type="checkbox" id="tag16" value="19" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag16">Family</label>

                    <input type="checkbox" id="tag17" value="28" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag17">Board Games</label>

                    <input type="checkbox" id="tag18" value="34" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag18">Educational</label>

                    <input type="checkbox" id="tag19" value="17" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag19">Card</label>

                    <input type="checkbox" id="tag20"value="" onChange={(e) => changeButton(e, genres)}/>
                    <label className="formButton"  for="tag20">No preference</label>

                </div>
                <br/>

                <div>
                    <h2 className="formTitle" style={{color: 'white', fontWeight: 'bold'}}>Which console(s)?</h2>
                    <input type="checkbox" id="console1" value="3" onChange={(e) => changeButton(e, platforms)}/>
                    <label className="consoleButton"  for="console1"><img src={MobileButton}/></label>

                    <input type="checkbox" id="console2" value="7" onChange={(e) => changeButton(e, platforms)}/>
                    <label className="consoleButton"  for="console2"><img src={SwitchButton}/></label>
                    
                    <input type="checkbox" id="console3" value="1" onChange={(e) => changeButton(e, platforms)}/>
                    <label className="consoleButton"  for="console3"><img src={XboxButton}/></label>

                    <input type="checkbox" id="console4" value="18" onChange={(e) => changeButton(e, platforms)}/>
                    <label className="consoleButton"  for="console4"><img src={PlayStationButton}/></label>

                    <input type="checkbox" id="console5" value="4" onChange={(e) => changeButton(e, platforms)}/>
                    <label className="consoleButton"  for="console5"><img src={PCButton}/></label>
                </div>
                <br/>

            <button className='submitButton' onClick={(e) => handleSubmit(ratings, platforms, genres, tags)}>Show my Games!</button>
        </div>
    )
}

export default Form;