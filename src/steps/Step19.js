import Round3 from "../stepVisuals/Round3";

const Step19Obj = {
    DescriptionText: "Session 2 - Round 1",
    SpeechBubble: <>
        <p>Note: If any player touches the cards while they are being dealt or answers any question of the asshole while the cards are being dealt, he has to swap his role with the “Asshole”.’</p>
        <p>E.g., President touches cards, so he would become the “Asshole” and the Asshole would become “President”</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step19Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [['flowers', 6],['shields', 6],['acorns', 6],['bells', 8],['bells', 10],['acorns', 10],['flowers', 10],['flowers', 'under'],['flowers', 'konig']];
    const middle = [];
    const changes = 0;
    return <><Round3 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step19(animate) {
    const Step19 = Step19Obj;
    //Step19Obj.animate = animate;
    Step19Obj.Visuals = Visuals;
    return Step19;
}



export default Step19;

