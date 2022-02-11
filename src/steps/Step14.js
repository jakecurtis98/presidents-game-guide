import Round1 from "../stepVisuals/Round1";
import {useState} from "react";

const Step14Obj = {
    DescriptionText: "Session 1 - Round 2",
    SpeechBubble: <>
        <p>The next player (P1) passes, P2 discards two cards of value “Ober”.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step14Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under']];
    const middle = [["shields", 7],["bells", 7],["acorns", 'ober'],["bells", 'ober']];
    const changes = 2;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step14(animate) {
    const Step14 = Step14Obj;
    Step14Obj.Visuals = Visuals;
    return Step14;
}

export default Step14;
