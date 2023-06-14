function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//qst2//

let count = 0;
        (function () {
          if (count === 0) {
            let count = 1;
            console.log(count); // What is logged?
          }
          console.log(count); // What is logged?
        })();


//q3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

///q4

function outer(length,breadth){
    function inner(breadth){
        return length*breadth;
    }
   return  inner(breadth);
}
let ans=outer(10,20);
console.log(ans)

//q5.

function outer(){
    let cnt=0;
    function inner(){
        return cnt+=1;
    }
    return inner;
}
let res=outer();
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());


///q6

var a = 12;
(function () {
  document.alert(a);
})();

//Q7

var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })
  ();
  x();

//q8

var globalVar = "xyz";

            (function outerFunc(outerArg) {
                var outerVar = 'a';
                
                (function innerFunc(innerArg) {
                var innerVar = 'b';
                
                console.log(
                    "outerArg = " + outerArg + "\n" +
                    "innerArg = " + innerArg + "\n" +
                    "outerVar = " + outerVar + "\n" +
                    "innerVar = "+ innerVar + "\n"+
                    "globalVar = " + globalVar);
                
                })
                (456);
            })
            (123);


