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

    const handle = () => {
        // handle form submission
        props.showResults();
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
        // console.log(tagArray[0])
    }

    return (
        <div>
            {console.log(tags[0])}
            <Collapse>
                <Panel header="What is your preferred rating?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, ratings)}>E[Everyone]</input>
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, ratings)}>Teen[Ages 13+]</input>
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, ratings)}>Mature[Ages 18+]</input>
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, ratings)}>No preference</input>
                </Panel>

                <Panel header="How many players?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, tags)}>Single-Player</input>
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, tags)}>Co-op(up to 4 players)</input>
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, tags)}>Online Multiplayer</input>
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}>No preference</input>
                </Panel>
               
                <Panel header="What price range?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, tags)}>E[Everyone]</input>
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, tags)}>Teen[Ages 13+]</input>
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, tags)}>Mature[Ages 18+]</input>
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, tags)}>No preference</input>
                </Panel>
                <Panel header="Select your favourite genre(s)">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, genres)}>E[Everyone]</input>
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, genres)}>Teen[Ages 13+]</input>
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, genres)}>Mature[Ages 18+]</input>
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, genres)}>No preference</input>
                </Panel>

                <Panel header="Which console(s)?">
                    <input type="checkbox" value="0" onChange={(e) => changeButton(e, platforms)}>E[Everyone]</input>
                    <input type="checkbox" value="1" onChange={(e) => changeButton(e, platforms)}>Teen[Ages 13+]</input>
                    <input type="checkbox" value="2" onChange={(e) => changeButton(e, platforms)}>Mature[Ages 18+]</input>
                    <input type="checkbox" value="" onChange={(e) => changeButton(e, platforms)}>No preference</input>
                </Panel>

            </Collapse>
            <button onClick={Games={ratings, platforms, genres, tags}}>Show my Games!</button>
        </div>
    )
}

export default Form;