import Round1 from "../stepVisuals/Round1";

const Step12_2Obj = {
    DescriptionText: "Session 1 - Round 1",
    SpeechBubble: <>
        <p>Then again P1 is at turn, let’s assume P1 passes, P2 also passes and P3 also passes. Then P4 is at turn. The only value P4 is allowed is Ace, but P4 does not have an Ace so P4 also passes. Since all the players have voluntarily passed respectively passed since they did not have the required value, the stack gets discarded and the last player to put on a card on the stack, which in this case was P4 can start the next round.</p>
    </>,
}


function Visuals(animate,setDoNextStep, step, direction) {
    Step12_2Obj.animate = animate;
    const length = 9;
    //const middleLength = 10;
    const hand = [["acorns", 6],["shields", 7],["bells", 7],["acorns", 8],["shields", 9],["flowers", 9],["acorns", 10],["bells", 'under']];
    const middle = [];
    const changes = 3;
    return <><Round1 changes={changes} length={length} animate={animate} firstStep={0} lastStep={0} setDoNextStep={setDoNextStep} step={step} direction={direction} hand={hand} middle={middle}/></>;
}

function Step12_2(animate) {
    const Step12_2 = Step12_2Obj;
    Step12_2Obj.Visuals = Visuals;
    return Step12_2;
}

export default Step12_2;

