
function Scoreboard(props){

    return(
        <div className="scoreboard">

            <p>Max Score: {props.maxScore}</p>
            <p>Current score: {props.score} </p>

        </div>
    )
}

export default Scoreboard;