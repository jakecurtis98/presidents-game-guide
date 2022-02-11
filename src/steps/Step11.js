import Round1 from "../stepVisuals/Round1";

const Step11Obj = {
    DescriptionText: "Session 1 - Round 1",
    SpeechBubble: <>
        <p>Next P4 is at turn, P4 has the same options as the other players before, so to either trump the card on the stack or pass.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step11Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under']];
    const middle = [["bells", 6],["shields", 'ober'],["acorns", 'konig']];
    const changes = 2;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step11(animate) {
    const Step11 = Step11Obj;
    Step11Obj.Visuals = Visuals;
    return Step11;
}

export default Step11;
