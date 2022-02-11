import Round1 from "../stepVisuals/Round1";

const Step7Obj = {
    DescriptionText: "",
    SpeechBubble: <>
        <p>Note: In case of 4 players, it is possible to evenly distribute all cards, if this is not possible the cards are dealt out as such that all players receive the same amount of cards and the remaining cards are discarded.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step7Obj.animate = animate;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under'],["acorns", 'konig']];
    const length = 9;
    const changes = 0;
    const middle = [];
    return <><Round1 changes={changes} length={length} animate={(animate === "out" ? "out" : "")} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step7(animate) {
    const Step7 = Step7Obj;
    Step7Obj.Visuals = Visuals;
    return Step7;
}

export default Step7;