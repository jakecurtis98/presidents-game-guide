import Round1 from "../stepVisuals/Round1";

const Step9Obj = {
    DescriptionText: "Session 1 - Round 1",
    SpeechBubble: <>
        <p>The game is played counterclockwise. The next player has to opportunity to pass or play a card of a higher value. So, let’s assume P2 discards a card of value “Ober”.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step9Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under'],["acorns", 'konig']];
    const middle = [["bells", 6],["shields", 'ober']];
    const changes = 1;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step9(animate) {
    const Step9 = Step9Obj;
    Step9Obj.Visuals = Visuals;
    return Step9;
}

export default Step9;

