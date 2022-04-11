const Card = (props) => {
    return (
        <div className="df row column row-center">
            <div className="pink-bg df center radius-primary">
                <img src={props.img} alt="" />
            </div>
            <h1 className="row m-v-primary description txt-primary font-metropolis-bold">{props.title}</h1>
            <p style={{lineHeight:"150%"}} className="description txt-primary font-metropolis-thin">{props.description}</p>
        </div>
    )
}
export default Card