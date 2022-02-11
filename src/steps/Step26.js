import Round3 from "../stepVisuals/Round3";

const Step26Obj = {
    DescriptionText: "",
    SpeechBubble: <>
        <p>In the end, the winner is the one who has been crowned king the most times - but there is no fixed number of rounds.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step26Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const selected = [3, 4, 5]
    const changes = 0;
    return <><Round3 changes={changes} selected={selected} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step26(animate) {
    const Step26 = Step26Obj;
    //Step26Obj.animate = animate;
    Step26Obj.Visuals = Visuals;
    return Step26;
}

export default Step26;
