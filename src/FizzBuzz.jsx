import Buzz from "./Buzz"

const FizzBuzz = (props)=>{
  return(
    <>
      {(props.num % 3 ===0 && props.num % 5 ===0) 
        ? <li className="fizz-buzz">{props.num} - FizzBuzz</li>
        : <Buzz num={props.num} /> }
      <br/>
    </>
  )
}

export default FizzBuzz