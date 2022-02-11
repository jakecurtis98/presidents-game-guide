import Round1 from "../stepVisuals/Round1";

const Step15Obj = {
    DescriptionText: "Session 1 - Round 2",
    SpeechBubble: <>
        <p>All the subsequent players pass. Thus, the stack is discarded and since P2 put the last cards on the stack P2 can discard the cards first in the next round.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step15Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under']];
    const middle = [];
    const changes = 2;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step15(animate) {
    const Step15 = Step15Obj;
    Step15Obj.Visuals = Visuals;
    return Step15;
}

export default Step15;

