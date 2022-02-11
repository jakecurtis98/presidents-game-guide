import {useEffect, useState} from "react";
import Card from "./Card";

function Round2(props) {
    const [hand, setHand] = useState([]);
    const [middle, setMiddle] = useState("");
    let stylesTimeout;
    useEffect(() => {
        if(props.animate === "out") {
            if((props.lastStep === 1 && props.direction === 'next') || (props.firstStep === 1 && props.direction === 'prev') ) {
                stylesTimeout = setInterval(() => {
                    props.setDoNextStep(() => 2);
                }, (250 * (props.changes+1)));
            } else {
                props.setDoNextStep(() => 2);
            }
        }
        return () => {clearTimeout(stylesTimeout);}
    }, [props.animate]);

    useEffect(() => {
            setHand((prevHand) => {
                let theHand = [];
                props.hand.forEach((card, index) => {
                    const thePrevHand = [...prevHand];
                    if (thePrevHand[index] === 'undefined' || (thePrevHand[index] ?? []).length <= 0) {
                        theHand.push([...card, 1, null]);
                    } else {
                        let prevCard = thePrevHand[index];
                        prevCard.pop();
                        if (prevCard[0] !== card[0] || prevCard[1] !== card[1]) {
                            theHand.push([...card, 1, prevCard]);
                        } else {
                            theHand.push([...card, 0]);
                        }
                    }
                });

                theHand = theHand
                    .concat(new Array(props.length).fill([null, null, 1]))
                    .slice(0, props.length);
                return theHand;
            });
    }, [props.hand]);

    useEffect(() => {
        setMiddle((prevHand) => {
            let theHand = [];
            props.middle.forEach((card, index) => {
                const thePrevHand = [...prevHand];
                if (thePrevHand[index] === 'undefined' || (thePrevHand[index] ?? []).length <= 0) {
                    theHand.push([...card, 1, null]);
                } else {
                    let prevCard = thePrevHand[index];
                    prevCard.pop();
                    if (prevCard[0] !== card[0] || prevCard[1] !== card[1]) {
                        theHand.push([...card, 1, prevCard]);
                    } else {
                        theHand.push([...card, 0]);
                    }
                }
            });

            theHand = theHand
                .concat(new Array(props.length).fill([null, null, 1]))
                .slice(0, props.length);
            return theHand;
        });
    }, [props.middle]);

    return (
        <>
            <div className={"cards-holder cards-holder-middle"} style={{height: 186}}>
                {((typeof middle !== 'undefined' && middle.length > 0) ? middle.map((item,index)=>{
                    return <Card key={index} int={index} type={"middle"} suit={item[0]} value={item[1]} changed={item[2]} prevCard={item[3]} setDoNextStep={props.setDoNextStep} animate={props.animate} lastStep={props.lastStep} firstStep={props.firstStep} direction={props.direction} length={props.length} />;
                }) : "")}
            </div>
            <div className={"cards-holder"}>
                {((typeof hand !== 'undefined' && hand.length > 0) ? hand.map((item,index)=>{
                    return <Card key={index} int={index} type={"hand"} suit={item[0]} value={item[1]} changed={item[2]} prevCard={item[3]} setDoNextStep={props.setDoNextStep} animate={props.animate} lastStep={props.lastStep} firstStep={props.firstStep} direction={props.direction} length={props.length} />;
                }) : "")}
            </div>
        </>
    );
}
export default Round2;