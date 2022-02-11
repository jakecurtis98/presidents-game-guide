import {useEffect, useState} from "react";

function Step3Visual(props) {
    const [animated, setAnimated] = useState(props.animated ?? 0);
    const [display, setDisplay] = useState('flex');
    const [styles, setStyles] = useState({
        one: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        two: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        three: {
            transition:'all .5s',
            opacity:(animated ? 1 : 0),
            top:(animated ? 0 : 20),
            position:'relative'
        },
        four: {
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
            setDisplay(() => 'flex');
            stylesTimeout = setInterval(() => {
                setStyles((prevStyles) => {
                    let newStyles = {};
                    newStyles[nums[i]] = {opacity: 1, top: 0, transition: 'all .5s', position: 'relative'};
                    return Object.assign({}, prevStyles, newStyles);
                });
                i = ++i;
                if (i >= 4) {
                    setAnimated(() => 1);
                    clearTimeout(stylesTimeout)
                }
            }, 250);
        } else if(props.animate === "out") {
            let i = 3;
            stylesTimeout = setInterval(() => {
                setStyles((prevStyles) => {
                    let newStyles = {};
                    newStyles[nums[i]] = {opacity: 0, top: 20, transition: 'all .25s', position: 'relative'};
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
            <div className={"row mt-20"}>
                <div className={"col-3 text-center"} style={styles.one}>
                    <h2 className={'cardTitles'}>Diamond</h2>
                    <img alt="diamond" src={'imgs/diamond.svg'} className={"suitImage"} />
                </div>
                <div className={"col-3 text-center"} style={styles.two}>
                    <h2 className={'cardTitles'}>Hearts</h2>
                    <img alt="heart" src={'imgs/heart.svg'} className={"suitImage"} />
                </div>
                <div className={"col-3 text-center"} style={styles.three}>
                    <h2 className={'cardTitles'}>Spades</h2>
                    <img alt="spade" src={'imgs/spade.svg'} className={"suitImage"} />
                </div>
                <div className={"col-3 text-center"} style={styles.four}>
                    <h2 className={'cardTitles'}>Clubs</h2>
                    <img alt="club" src={'imgs/club.svg'} className={"suitImage"} />
                </div>
            </div>
        </>
    );
}
export default Step3Visual;