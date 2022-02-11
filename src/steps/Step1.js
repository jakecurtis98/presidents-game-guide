import Step1Visual from "../stepVisuals/Step1Visual";
import Step2Visual from "../stepVisuals/Step2Visual";

const Step1Obj = {
    DescriptionText: "",
    Visuals: <Step1Visual animate={"in"} />,
    SpeechBubble: <>
        <p>The more, the better - the game becomes more fun, the more people participate.</p>
        <p>With more players, it is recommended to use several decks of cards.</p>
        <p>The goal of the game is to get rid of all the cards.</p>
    </>,

}

function Visuals(animate,setDoNextStep, step, direction) {
    Step1Obj.animate = animate;
    return <><Step1Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} /></>;
}

function Step1(animate) {
    const Step1 = Step1Obj;
    //Step1Obj.animate = animate;
    Step1Obj.Visuals = Visuals;
    return Step1;
}



export default Step1;