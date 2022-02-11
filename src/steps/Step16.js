import Step16Visual from "../stepVisuals/Step16Visual";

const Step16Obj = {
    DescriptionText: "Session 1 - Round 2",
    SpeechBubble: <>
        <p>The game continues until one player has gotten rid of all cards. The first player to get rid of all cards is crowned “President”. The second player to get rid of all cards is crowned “Vice-President”. The second to last person to discard all cards is crowned “Vice-Asshole” and the last player “Asshole”.</p>
    </>,
}

function Visuals(animate,setDoNextStep, step, direction) {
    Step16Obj.animate = animate;
    return <><Step16Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step16(animate) {
    const Step16 = Step16Obj;
    //Step16Obj.animate = animate;
    Step16Obj.Visuals = Visuals;
    return Step16;
}



export default Step16;
