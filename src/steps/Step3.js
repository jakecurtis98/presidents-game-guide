import Step3Visual from "../stepVisuals/Step3Visual";
import Step2Visual from "../stepVisuals/Step2Visual";

const Step3Obj = {
    DescriptionText: "",
    Visuals: <><Step2Visual animate={"none"} animated={1} /><Step3Visual animate={"in"} /></>,
    SpeechBubble: <>
        <p>The French suits are diamond, hearts, spades and clubs.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step3Obj.animate = animate;
    return <><Step2Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /><Step3Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step3(animate) {
    const Step3 = Step3Obj;
    Step3Obj.Visuals = Visuals;
    return Step3;
}

export default Step3;