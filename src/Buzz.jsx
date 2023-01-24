import Fizz from "./Fizz"

const Buzz = (props)=>{
  return(
    <>
      {(props.num % 5 === 0) 
        ? <li className="buzz">{props.num} - Buzz</li> 
        : <Fizz num={props.num} />}
    </>
  )
}

export default Buzz