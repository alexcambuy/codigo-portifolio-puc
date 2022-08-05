function doSomething(value){
  if(value==0){
    return 0;
  }
  else{
    console.log(value+doSomething(value-1));
    return value + doSomething(value-1);
  }
}
doSomething(3);