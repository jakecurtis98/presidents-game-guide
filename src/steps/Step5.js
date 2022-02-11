import Step5Visual from "../stepVisuals/Step5Visual";

const Step5Obj = {
    DescriptionText: "",
    Visuals: <Step5Visual />,
    SpeechBubble: <>
        <p>I will show you how the game is played with one deck of cards and 4 players.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step5Obj.animate = animate;
    return <><Step5Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step5(animate) {
    const Step5 = Step5Obj;
    Step5Obj.Visuals = Visuals;
    return Step5;
}

export default Step5;