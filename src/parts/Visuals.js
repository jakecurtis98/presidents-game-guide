function Visuals(props) {

    return (
        <div className={"CardsContainer"}>
            <div className={"CardsHolder"}>
                {props.children}
            </div>
        </div>
    );
}



export default Visuals;