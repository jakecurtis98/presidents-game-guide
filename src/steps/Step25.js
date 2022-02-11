import Round3 from "../stepVisuals/Round3";

const Step25Obj = {
    DescriptionText: "",
    SpeechBubble: <>
        <p>Apart from the exchange at the beginning this session (and also all the following) are played the same as in the first session.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step25Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [3, 4, 5]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step25(animate) {
    const Step25 = Step25Obj;
    //Step25Obj.animate = animate;
    Step25Obj.Visuals = Visuals;
    return Step25;
}

export default Step25;
