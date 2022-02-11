import Step23Visual from "../stepVisuals/Step6Visual";
import Round3 from "../stepVisuals/Round3";

const Step23Obj = {
    DescriptionText: "Session 2 - Round 1",
    Visuals: <Step23Visual />,
    SpeechBubble: <>
        <p>So, if the P4 (me player) was termed “Asshole” in the previous session he would have to give the following 3 cards to the “President”</p>
        <p>If he was “Vice-Asshole” he would give the following 2 cards to the “President”</p>
        <p>If he was termed “President” he would be free to give any 3 cards to the “Asshole” and in case of being “Vice-President” he would give any 2 cards to the president.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step23Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [3, 4, 5]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step23(animate) {
    const Step23 = Step23Obj;
    //Step23Obj.animate = animate;
    Step23Obj.Visuals = Visuals;
    return Step23;
}



export default Step23;

