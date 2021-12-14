import '../App.scss'


function Card(props) {
    return (
    <div onClick={props.clickAction} className="card" id={props.id}>
      <p className="text"> {props.p}</p>
      <img src={require(`../imgs/${props.id}.webp`).default} className="photo" alt=""/>
    </div>
  );
}


export default Card;
