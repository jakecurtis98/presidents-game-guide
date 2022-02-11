import Step4Visual from "../stepVisuals/Step4Visual";

const Step4Obj = {
    DescriptionText: "",
    SpeechBubble: <>
        <p>The ranking of the cards is the following, for each of the suits the ranking from lowest to highest is the following:</p>
        <p>6 7 8 9 10 Under(pawn) Ober(queen) König(King) Ace.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step4Obj.animate = animate;
    return <><Step4Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step4(animate) {
    const Step4 = Step4Obj;
    Step4Obj.Visuals = Visuals;
    return Step4;
}

export default Step4;