import Buzz from "./Buzz"
import Prime from "./Prime"

const FizzBuzz = (props)=>{
  return(
    <>
      {(props.num % 3 ===0 && props.num % 5 ===0) 
        ? <li className="fizz-buzz">{props.num}</li>
        : <Buzz num={props.num} /> }
      <br/>
    </>
  )
}

export default FizzBuzz