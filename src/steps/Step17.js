import Step16Visual from "../stepVisuals/Step16Visual";

const Step17Obj = {
    DescriptionText: "Session 1 - Round 2",
    SpeechBubble: <>
        <p>Note: In case of more than 4 players all the players getting rid of the cards between second and second to last are termed citizens.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step17Obj.animate = animate;
    return <><Step16Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step17(animate) {
    const Step17 = Step17Obj;
    //Step17Obj.animate = animate;
    Step17Obj.Visuals = Visuals;
    return Step17;
}



export default Step17;
