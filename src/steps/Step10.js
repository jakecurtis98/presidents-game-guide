import Round1 from "../stepVisuals/Round1";

const Step10Obj = {
    DescriptionText: "Session 1 - Round 1",
    SpeechBubble: <>
        <p>P3 is next in line and just like P3 has to play a card of higher value or pass. In this game P3 does not play a card, that can either mean that P3 voluntarily passes or does not have a card of higher value.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step10Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under'],["acorns", 'konig']];
    const middle = [["bells", 6],["shields", 'ober']];
    return <><Round1 length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step10(animate) {
    const Step10 = Step10Obj;
    Step10Obj.Visuals = Visuals;
    return Step10;
}

export default Step10;

