import Step21Visual from "../stepVisuals/Step6Visual";
import Round3 from "../stepVisuals/Round3";

const Step21Obj = {
    DescriptionText: "Session 2 - Round 1",
    Visuals: <Step21Visual />,
    SpeechBubble: <>
        <p>So, if the P4  was termed “Asshole” in the previous session he would have to give the following 3 cards to the “President”</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step21Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [6,7, 8]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step21(animate) {
    const Step21 = Step21Obj;
    //Step21Obj.animate = animate;
    Step21Obj.Visuals = Visuals;
    return Step21;
}



export default Step21;



