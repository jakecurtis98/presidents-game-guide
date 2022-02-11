import {useEffect, useState} from "react";

function Step3Visual(props) {
    const [animated, setAnimated] = useState(props.animated ?? 0);
    const [styles, setStyles] = useState({
        1: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        2: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        3: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        4: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        5: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        6: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        7: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        8: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        9: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        }
    });
    let stylesTimeout,stylesTimeout1;
    useEffect(() => {
        const nums = ["one", "two", "three", "four"];
        if(props.animate === "in") {
            let i = 0;
            stylesTimeout = setInterval(() => {
                setStyles((prevStyles) => {
                    let newStyles = {};
                    newStyles[i] = {opacity: 1, top: 0, transition: 'all .5s', position: 'relative'};
                    return Object.assign({}, prevStyles, newStyles);
                });
                i = ++i;
                if (i >= 10) {
                    setAnimated(() => 1);
                    clearTimeout(stylesTimeout)
                }
            }, 250);
        } else if(props.animate === "out") {
            console.log(styles);
            let i = 10;
            stylesTimeout = setInterval(() => {
                setStyles((prevStyles) => {
                    let newStyles = {};
                    newStyles[i] = {opacity: 0, top: 20, transition: 'all .25s', position: 'relative'};
                    return Object.assign({}, prevStyles, newStyles);
                });
                i = --i;
                if (i < 0) {
                    stylesTimeout1 = setTimeout(() => {setAnimated(() => 0);props.setDoNextStep(() => 2);}, 250);
                    clearTimeout(stylesTimeout)
                }
            }, 100);
        }
        return () => {clearTimeout(stylesTimeout);clearTimeout(stylesTimeout1);}
    }, [props.animate]);

    return (
        <>
            <div className={"cards-holder overlapping"}>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/6.png"} style={styles[1]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/7.png"} style={styles[2]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/8.png"} style={styles[3]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/9.png"} style={styles[4]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/10.png"} style={styles[5]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/under.png"} style={styles[6]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/ober.png"} style={styles[7]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/konig.png"} style={styles[8]} />
                </div>
                <div className={"card"}>
                    <img src={"imgs/cards/flowers/ace.png"} style={styles[9]} />
                </div>
            </div>
        </>
    );
}
export default Step3Visual;