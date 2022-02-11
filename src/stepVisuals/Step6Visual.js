import {useEffect, useState} from "react";

function Step6Visual(props) {
    let stylesTimeout,stylesTimeout1;
    useEffect(() => {
        if(props.animate === "in") {

        } else if(props.animate === "out") {
            props.setDoNextStep(() => 2);
        }
        return () => {clearTimeout(stylesTimeout);clearTimeout(stylesTimeout1);}
    }, [props.animate]);

    return (
        <>
            <p>To Add</p>
        </>
    );
}
export default Step6Visual;