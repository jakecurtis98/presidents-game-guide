import Step2Visual from "../stepVisuals/Step2Visual";
import Step1Visual from "../stepVisuals/Step1Visual";

const Step2Obj = {
    DescriptionText: "",
    SpeechBubble: <>
        <p>In Switzerland it is common to play President with the Swiss German pack of cards.</p>
        <p>The Swiss German deck is similar to the French deck, it also includes 36 cards and has four suits. The suits are however different in the Swiss-German and French pack.</p>
        <p>The Swiss-German suits are roses (Rosen), acorns (Eicheln), shields (Schilten) and bells (Schellen).</p>
    </>,

}

function Visuals(animate,setDoNextStep, step, direction) {
    Step2Obj.animate = animate;
    return <><Step2Visual animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction}/></>;
}

function Step2(animate) {
    const Step2 = Step2Obj;
    Step2Obj.Visuals = Visuals;
    return Step2;
}

export default Step2;