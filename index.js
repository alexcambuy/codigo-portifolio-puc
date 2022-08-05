console.log('Heloo World!!!');
console.log('Fundamentos de comutação e algoritmos');

function avaliaParidade(limiteSuperior){
  for(let i=0; i<limiteSuperior; i++){
    if(i%2==1)
      console.log(i+": é impar")
    else
      console.log(i+": é par")
  }
}

avaliaParidade(10)

var mySet = new Set()

mySet.add(0)
console.log(mySet)
console.log("---------------")

mySet.add(1)
console.log(mySet)
console.log("---------------")

mySet.add(1)
console.log(mySet)
console.log("---------------")

mySet.add(2)
console.log(mySet)
console.log("---------------")

mySet.add(3)
console.log(mySet)
console.log("---------------")

mySet.add(2)
console.log(mySet)
console.log("---------------")