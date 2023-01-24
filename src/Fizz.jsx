import Prime from "./Prime"

const Fizz = (props)=>{
  return(
    <>
      {(props.num%3 === 0) 
        ? <li className="fizz">{props.num} - Fizz</li> 
        : <li><Prime num={props.num} /></li>}
    </>
  )
}

export default Fizz