function isPrime(int){
  if(int === 1) return false;
  for(let i=2; i<int; i++){
    if(int % i === 0){
      return false;
    }else if(int%i < 1) return false;
  }
  return true;
}

const Prime = (props)=>{
  return(
    <>
      {isPrime(props.num) ? <li className="prime">Prime</li> : <></>} 
    </>
  )
}

export default Prime