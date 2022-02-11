import Description from "./Description";
import Visuals from "./Visuals";
import React from "react";

function VisualArea(props) {
    //console.log(props.Visuals);

    let visuals;
    if(typeof props.Visuals == "function") {
        //console.log("here", props.animate);
        //console.log("here1", props.doNextStep);
        visuals = props.Visuals(props.animate, props.setDoNextStep, props.step, props.direction);
    } else {
        visuals = props.Visuals;
    }
    return (
        <div className={"VisualAreaContainer"} style={{opacity:props.opacity}}>
            <Description>
                {props.DescriptionText ?? ""}
            </Description>
            <Visuals>
                {visuals}
            </Visuals>
        </div>
    );
}



export default VisualArea;