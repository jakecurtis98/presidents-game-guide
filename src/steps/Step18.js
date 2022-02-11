import Round3 from "../stepVisuals/Round3";

const Step18Obj = {
    DescriptionText: "Session 2 - Round 1",
    SpeechBubble: <>
        <p>In the next session of the game, the “Asshole” deals the cards and the person to the right starts the round 1.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step18Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const changes = 8;
    return <><Round3 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step18(animate) {
    const Step18 = Step18Obj;
    //Step18Obj.animate = animate;
    Step18Obj.Visuals = Visuals;
    return Step18;
}



export default Step18;
