import {useEffect, useState} from "react";

function Card(props) {
    const [style, setStyle] = useState({
        transition:'all .5s',
        opacity:0,
        top:20,
        position:'relative'
    });
    const [suit, setSuit] = useState(null);
    const [value, setValue] = useState(null);
    const [created, setCreated] = useState(0);

    let effectTimeout, delayTimout;

    const animateIn = (counter) => {
        setStyle((prevStyle) => {
            let newStyles = {...prevStyle};
            newStyles.opacity = 0;
            newStyles.top = 20;
            return newStyles;
        });
        effectTimeout = setTimeout(() => {
            setSuit(props.suit);
            setValue(props.value);
            setStyle((prevStyle) => {
                let newStyles = {...prevStyle};
                newStyles.opacity = 1;
                newStyles.top = 0;
                return newStyles;
            });
        }, (250 * counter));
    }

    const animateOut = (counter) => {
        effectTimeout = setTimeout(() => {
            setStyle((prevStyle) => {
                let newStyles = {...prevStyle};
                newStyles.opacity = 0;
                newStyles.top = 20;
                return newStyles;
            }, );
        }, (250 * counter));
    }

    useEffect(() => {
        if(suit === null && value === null) {
                setSuit(props.suit);
                setValue(props.value);
                if(props.suit !== null && props.value !== null) {
                    if (created === 0) {
                        animateIn(props.int);
                        setCreated(1);
                    } else {
                        animateIn(0);
                    }
                }
        } else if(props.suit !== suit || props.value !== value) {
            if(props.suit === null && props.value === null) {
                setStyle((prevStyle) => {
                    let newStyles = {...prevStyle};
                    newStyles.opacity = 0;
                    newStyles.top = 20;
                    return newStyles;
                });
                effectTimeout = setTimeout(() => {
                    setSuit(props.suit);
                    setValue(props.value);
                }, 500);
            } else {
                animateIn(props.int);
            }
            return () => {
                clearTimeout(effectTimeout);
                clearTimeout(delayTimout);
            }
        }
    }, [props.suit, props.value]);

    useEffect(() => {
        if((props.selected ?? []).includes(props.int)) {
            setStyle((prevStyle) => {
                let newStyles = {...prevStyle};
                newStyles.top = -20;
                return newStyles;
            });
        } else {
            setStyle((prevStyle) => {
                let newStyles = {...prevStyle};
                newStyles.top = 0;
                return newStyles;
            });
        }
    }, [props.selected])

    let stylesTimeout;
    useEffect(() => {
        if(props.animate === "out") {
            if((props.lastStep === 1 && props.direction === 'next') || (props.firstStep === 1 && props.direction === 'prev') ) {
                animateOut(props.length - props.int);
            }
        }
        return () => {clearTimeout(effectTimeout);}
    }, [props.animate]);

    if(suit !== null && value !== null) {
        console.log("imgs/cards/" + suit + "/" + value + ".png");
        return (
            <div className={"card"} style={(props.type === "middle" ? {height: 186} : {})}>
                <img src={"imgs/cards/" + suit + "/" + value + ".png"} style={style}/>
            </div>
        );
    } else {
        return (
            <div className={"card"} style={(props.type === "middle" ? {height: 0} : {})}>
                <img src={"imgs/cards/" + suit + "/" + value + ".png"} style={style}/>
            </div>
        );
    }
}

export default Card;