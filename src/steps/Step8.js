import Round1 from "../stepVisuals/Round1";

const Step8Obj = {
    DescriptionText: "Session 1 - Round 1",
    SpeechBubble: <>
        <p>The player to the right of the distributor can start by discarding one card or multiple cards of the same value. In this example the P1 discards one card of value 6.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step8Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under'],["acorns", 'konig']];
    const middle = [["bells", 6]]
    const changes = 1;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step8(animate) {
    const Step8 = Step8Obj;
    Step8Obj.Visuals = Visuals;
    return Step8;
}

export default Step8;
