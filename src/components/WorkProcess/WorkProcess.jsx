import Title_Block from "components/Title_Block/Title_Block";
import "./WorkProcess.css"
import WorkSteps from "./WorkSteps/WorkSteps.jsx"

const WorkProcess = (props) => {
    return (
        <>
            <div className="container pt-36">
                <div className="row">
                    <Title_Block title="Our Working Process" subtitle="Step-by-Step Guide to Achieving Your Business Goals" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <WorkSteps steps = {props.steps}/>
                </div>
            </div>
        </>
    );
}

export default WorkProcess;