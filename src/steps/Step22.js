import Round3 from "../stepVisuals/Round3";

const Step22Obj = {
    DescriptionText: "Session 2 - Round 1",
    SpeechBubble: <>
        <p>If he was “Vice-Asshole” he would give the following 2 cards to the “President”</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step22Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [7, 8]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step22(animate) {
    const Step22 = Step22Obj;
    //Step22Obj.animate = animate;
    Step22Obj.Visuals = Visuals;
    return Step22;
}



export default Step22;

