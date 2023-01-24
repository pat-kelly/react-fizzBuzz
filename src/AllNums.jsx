import FizzBuzz from "./FizzBuzz";

const AllNums = (props)=>{
  const numArray = [];
  for(let i=1; i<=props.topNum; i++){
    numArray.push(i);
  }
  console.log(numArray);
  return(
    <>
      <ul>
        {numArray.map((num,idx) =>(<FizzBuzz key={idx} num={num} />))}
      </ul>
    </>
  )
}

export default AllNums