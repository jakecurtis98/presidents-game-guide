import {useEffect, useState} from "react";

function Step1Visual(props) {
    const [opacity, setOpacity] = useState(0);
    const [display, setDisplay] = useState('block');
    let opacityTimeout, opacityTimeout1;
    let transition = 'opacity .5s';
    //console.log(props.animate);
    useEffect(() => {
        if(props.animate === "in") {
            setDisplay(() => 'block');
            transition = 'opacity .5s';
            opacityTimeout = setTimeout(() => setOpacity(() => 1), 100);
        } else {
            transition = 'opacity .25s';
            opacityTimeout = setTimeout(() => {setOpacity(() => 0);}, 100);
            opacityTimeout1 = setTimeout(() => {setDisplay(() => 'none');props.setDoNextStep(() => 2);}, 350);
        }
        return () => {clearTimeout(opacityTimeout);clearTimeout(opacityTimeout1);}
    },[props.animate]);

    return (
            <img src={'imgs/group.png'} style={{width: '25%', display:display, margin:'auto',transition:transition, opacity:opacity}} alt={"Group"}/>
    );
}
export default Step1Visual;