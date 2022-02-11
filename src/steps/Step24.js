import Round3 from "../stepVisuals/Round3";

const Step24Obj = {
    DescriptionText: "Session 2 - Round 1",
    SpeechBubble: <>
        <p>If he was termed “President” he would be free to give any 3 cards to the “Asshole” and in case of being “Vice-President” he would give any 2 cards to the president.</p>
        <p>Note: It makes sense to give the cards of the lowest value away unless they are doubles (or any multiples) of the same value.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step24Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [3, 4, 5]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step24(animate) {
    const Step24 = Step24Obj;
    //Step24Obj.animate = animate;
    Step24Obj.Visuals = Visuals;
    return Step24;
}

export default Step24;
