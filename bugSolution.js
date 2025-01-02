function foo(a) {
  if (Number.isNaN(a)) {
    return NaN; // Handle NaN explicitly
  } else if (a === null) {
    return 0; 
  } else {
    return a + 1; 
  }
}
//Alternative solution using isFinite
function foo(a){
  if(isFinite(a) && a === null){
    return 0;
  }else if(isFinite(a)){
    return a + 1;
  }else{
    return NaN;
  }
}