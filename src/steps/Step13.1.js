import Round1 from "../stepVisuals/Round1";
import {useState} from "react";

const Step13_2Obj = {
    DescriptionText: "Session 1 - Round 2",
    SpeechBubble: <>
        <p>P4 has 2 cards of value 7, which he discards.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step13_2Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under']];
    const middle = [];
    const changes = 4;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step13_2(animate) {
    const Step13_2 = Step13_2Obj;
    Step13_2Obj.Visuals = Visuals;
    return Step13_2;
}

export default Step13_2;
