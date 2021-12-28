import { Collapse, Radio } from 'antd';
import 'antd/dist/antd.css';
// import React, { useState } from "react";
import '../App.css'
const { Panel } = Collapse;

const Form = (props) => {

    const handle = () => {
        // handle form submission
        //props.showResults();
        console.log("Form submitted!!");
        // const[questionDeatils, setquestionDetails] = useState({
        //     example: "",
        // });
    }

    return (
        <div>
            <div>
                Find your next
                Favourite Game
                <input type= "button" value="Begin Questionare"/>
            </div>
            <form onSubmit={handle()}>
                <Collapse>
                    <Panel header="What is your preferred rating?">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">[E]Everyone</Radio.Button>
                        <Radio.Button value="b">Teen [18+]</Radio.Button>
                        <Radio.Button value="c">Mature [18+]</Radio.Button>
                        <Radio.Button value="d">No Preference</Radio.Button>
                    </Radio.Group>
                    </Panel>
                    <Panel header="Who will you be playing with?">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">Alone</Radio.Button>
                        <Radio.Button value="b">Co-op</Radio.Button>
                        <Radio.Button value="c">Multiplayer</Radio.Button>
                        <Radio.Button value="d">No Preference</Radio.Button>
                    </Radio.Group>
                    </Panel>
                    <Panel header="Which console(s)?">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">Nintendo Switch</Radio.Button>
                        <Radio.Button value="b">Mobile (Android/IOS)</Radio.Button>
                        <Radio.Button value="c">Xbox</Radio.Button>
                        <Radio.Button value="d">Playstation</Radio.Button>
                    </Radio.Group>
                    </Panel>
                    <Panel header="What price range?">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">Free</Radio.Button>
                        <Radio.Button value="b">Less than $10 USD</Radio.Button>
                        <Radio.Button value="c">$10 - $30 USED</Radio.Button>
                        <Radio.Button value="d">$31+ USD</Radio.Button>
                        <Radio.Button value="e">No Preference</Radio.Button>
                    </Radio.Group>
                    </Panel>
                    <Panel header="Select your favourite genre(s)">
                    <div id="ck-button">
                        <label>
                            <input type="checkbox" value="A tag/genre"/><span>EXample tag</span>
                            <input type="checkbox" value="B tag/genre"/><span>EXample tag</span>
                            <input type="checkbox" value="C tag/genre"/><span>EXample tag</span>
                            <input type="checkbox" value="D tag/genre"/><span>EXample tag</span>
                            <input type="checkbox" value="E tag/genre"/><span>EXample tag</span>
                            <input type="checkbox" value="F tag/genre"/><span>EXample tag</span>
                        </label>
                    </div>
                    </Panel>
                </Collapse>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Form;