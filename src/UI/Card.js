const Card = (props) => {
    return ( <div className={`Card__background h-fit w-full  ${props.classes}`}>{props.children}</div> );
}
 
export default Card ;