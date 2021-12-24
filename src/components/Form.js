import { Collapse } from 'antd';
import 'antd/dist/antd.css';
const { Panel } = Collapse;

const Form = (props) => {

    const handle = () => {
        // handle form submission
        console.log("Form submitted");
    }

    return (
        <div>
            <form>
                <Collapse>
                    <Panel header="What is your preferred rating?">
                        <p>Lorem ipsum</p>
                    </Panel>
                    <Panel header="How many players?">
                        <p>Lorem ipsum</p>
                    </Panel>
                    <Panel header="What platforms?">
                        <p>Lorem ipsum</p>
                    </Panel>
                    <Panel header="What price range?">
                        <p>Lorem ipsum</p>
                    </Panel>
                    <Panel header="What genres?">
                        <p>Lorem ipsum</p>
                    </Panel>
                </Collapse>
                <button onClick={handle()}>Submit</button>
            </form>

        </div>
    )
}

export default Form;