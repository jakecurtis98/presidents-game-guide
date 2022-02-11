function Description(props) {

    return (
        <div className={"buttonsContainer"}>
            <span className={"btn backBtn"} onClick={props.handleBackClick}>{props.backText}</span>
            <span className={"btn difBtn"} onClick={props.handleDifClick}>{props.difText}</span>
            <span className={"btn nextBtn"} onClick={props.handleNextClick}>{props.nextText}</span>
        </div>
    );
}



export default Description;