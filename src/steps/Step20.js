import Round3 from "../stepVisuals/Round3";

const Step20Obj = {
    DescriptionText: "Session 2 - Round 1",
    SpeechBubble: <>
        <p>However, before round 1 starts, the “Asshole” has to give to the “President” 3 of his best cards and receives any 3 cards from the president in return. The “Vice- Asshole” and “Vice-President” do the same with 2 cards.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step20Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const changes = 0;
    return <><Round3 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step20(animate) {
    const Step20 = Step20Obj;
    //Step20Obj.animate = animate;
    Step20Obj.Visuals = Visuals;
    return Step20;
}



export default Step20;


