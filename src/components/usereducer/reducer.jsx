// const reducer = (count, action) => {
  // if (action.type === "INC") {
  //   return (state = state + 1);
  // }
  // if (action.type === "DEC") {
  //   // return (state = state - 1);
  //   let newNum = 0;
  //   state >= 1 ? (newNum = state - 1) : (newNum = 0);
  //   return newNum;
  // }
  // return state;



  
// };



const reducer=(count,action)=>{
  if (action.type==='INC'){
    return count=count+1
  }
  if (action.type==='DEC'){
    return count>=1?count=count-1:count=0
  }
  
  // return count
}

export default reducer;