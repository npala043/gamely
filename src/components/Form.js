import { Collapse, Radio } from 'antd';
import 'antd/dist/antd.css';
import React, { createRef, useState } from "react";
import '../App.css';


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
        console.log("Form submitted!!");
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
                    <p>What is your preferred rating?</p>
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, ratings)}/>E[Everyone]
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, ratings)}/>Teen[Ages 13+] 
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, ratings)}/>Mature[Ages 18+] 
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, ratings)}/>No preference 
                </div>
                <br/>

                <div>
                    <p>How many players?</p>
                    <input type="checkbox" value="31" onChange={(e) => changeButton(e, tags)}/>Single-Player
                    <input type="checkbox" value="18" onChange={(e) => changeButton(e, tags)}/>Co-op(up to 4 players)
                    <input type="checkbox" value="7" onChange={(e) => changeButton(e, tags)}/>Online Multiplayer
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}/>No preference
                </div>
                <br/>
               
                <div>
                    <p>How old do you prefer your games?</p>
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, tags)}/>Classic (6 years and older)
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, tags)}/>Recent (Less than 5 years old)
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}/>No preference
                </div>
                <br/>

                <div>
                    <p>Select your favourite genre(s)</p>
                    <input type="checkbox" value="4" onChange={(e) => changeButton(e, genres)}/>Action
                    <input type="checkbox" value="51" onChange={(e) => changeButton(e, genres)}/>indie
                    <input type="checkbox" value="3" onChange={(e) => changeButton(e, genres)}/>Adventure
                    <input type="checkbox" value="5" onChange={(e) => changeButton(e, genres)}/>RPG
                    <input type="checkbox" value="10" onChange={(e) => changeButton(e, genres)}/>Strategy
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, genres)}/>Shooter
                    <input type="checkbox" value="40" onChange={(e) => changeButton(e, genres)}/>Casual
                    <input type="checkbox" value="14" onChange={(e) => changeButton(e, genres)}/>Simulation
                    <input type="checkbox" value="7" onChange={(e) => changeButton(e, genres)}/>Puzzle
                    <input type="checkbox" value="11" onChange={(e) => changeButton(e, genres)}/>Arcade
                    <input type="checkbox" value="83" onChange={(e) => changeButton(e, genres)}/>Platformer
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, genres)}/>Racing
                    <input type="checkbox" value="59" onChange={(e) => changeButton(e, genres)}/>Massively Multiplayer
                    <input type="checkbox" value="15" onChange={(e) => changeButton(e, genres)}/>Sports
                    <input type="checkbox" value="6" onChange={(e) => changeButton(e, genres)}/>Fighting
                    <input type="checkbox" value="19" onChange={(e) => changeButton(e, genres)}/>Family
                    <input type="checkbox" value="28" onChange={(e) => changeButton(e, genres)}/>Board Games
                    <input type="checkbox" value="34" onChange={(e) => changeButton(e, genres)}/>Educational
                    <input type="checkbox" value="17" onChange={(e) => changeButton(e, genres)}/>Card
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, genres)}/>No preference
                </div>
                <br/>

                <div>
                    <p>Which console(s)?</p>
                    <input type="checkbox" value="3" onChange={(e) => changeButton(e, platforms)}/>Mobile (android/ios)
                    <input type="checkbox" value="7" onChange={(e) => changeButton(e, platforms)}/>Nintendo Switch
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, platforms)}/>Xbox
                    <input type="checkbox" value="18" onChange={(e) => changeButton(e, platforms)}/>Playstation
                    <input type="checkbox" value="4" onChange={(e) => changeButton(e, platforms)}/>Desktop PC
                </div>
                <br/>

            <button onClick={(e) => handleSubmit(ratings, platforms, genres, tags)}>Show my Games!</button>
        </div>
    )
}

export default Form;