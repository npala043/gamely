import { Collapse, Radio } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import '../App.css';
import Results from "./Results"
import Games from "./Games";
const { Panel } = Collapse;


const Form = (props) => {


    let ratings = [];
    let platforms = [];
    let genres = [];
    let tags = [];

    const handle = (ratings, platforms, genres, tags) => {
        // handle form submission
        props.showResults(ratings, platforms, genres, tags);
        console.log("Form submitted!!");
    }

    const changeButton = (e, tagArray) => {
        let index;
        if(e.target.checked) {
            tagArray.push(+e.target.value)
        }
        else {
            index = tagArray.indexOf(+e.target.value)
            tagArray.splice(index, 1)
        }
        console.log(tagArray)
    }

    return (
        <div>
            <Collapse>
                <Panel header="What is your preferred rating?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, ratings)}/>E[Everyone]
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, ratings)}/>Teen[Ages 13+]
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, ratings)}/>Mature[Ages 18+]
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, ratings)}/>No preference
                </Panel>

                <Panel header="How many players?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, tags)}/>Single-Player
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, tags)}/>Co-op(up to 4 players)
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, tags)}/>Online Multiplayer
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}/>No preference
                </Panel>
               
                <Panel header="How old do you prefer your games?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, tags)}/>Classic (6 years and older)
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, tags)}/>Recent (Less than 5 years old)
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}/>No preference
                </Panel>
                <Panel header="Select your favourite genre(s)">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, genres)}/>Action
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, genres)}/>Adventure
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, genres)}/>Arcade
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, genres)}/>No preference
                </Panel>

                <Panel header="Which console(s)?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, platforms)}/>Mobile (android/ios)
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, platforms)}/>Nintendo Switch
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, platforms)}/>Xbox
                    <input type="checkbox" value="3" onChange={(e) => changeButton(e, platforms)}/>Playstation
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, platforms)}/>Desktop PC
                </Panel>

            </Collapse>
            <button onClick={(e) => handle(ratings, platforms, genres, tags)}>Show my Games!</button>
        </div>
    )
}

export default Form;