import Step6Visual from "../stepVisuals/Step6Visual";
import Round1 from "../stepVisuals/Round1";

const Step6Obj = {
    DescriptionText: "",
    Visuals: <Step6Visual />,
    SpeechBubble: <>
        <p>In the first session, the person to the right of the player deals the cards, otherwise the "asshole" does. In the game with 4 players each player receives exactly 9 cards. The aim of the game is to get rid of all the cards as fast as possible.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step6Obj.animate = animate;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under'],["acorns", 'konig']];
    const length = 9;
    const changes = 9;
    const middle = [];
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={1} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step6(animate) {
    const Step6 = Step6Obj;
    Step6Obj.Visuals = Visuals;
    return Step6;
}

export default Step6;