// for increment 
let btn1= document.getElementById("increment");
// console.log(btn1);
btn1.addEventListener("click",caculate1);
function caculate1(){
    let z=document.getElementById("increment").value
    // console.log(z)
    result(z);
   
}

// for decrement

let btn2= document.getElementById("decrement")
btn2.addEventListener("click",caculate2);
function caculate2(){
    let z=document.getElementById("decrement").value
    // console.log(z)
    result(z);
    
}
//  for reset
let btn3=document.getElementById("initial")
btn3.addEventListener("click",caculate3);
function caculate3(){
    let z=document.getElementById("initial").value
    // console.log(z)
    result(z);
    
}

// operation
let a=Number( document.getElementById("op").value);


function result(x)  {
    // console.log(x)
    if (x == "inc") {
        a = a + 1;
        console.log(a);
        document.getElementById("op").value=a;
    }else if(x== "dec"){
        a = a - 1;
        console.log(a);
        document.getElementById("op").value=a;
    }
    else{
        a=0;
        document.getElementById("op").value=0;
    }   
}
// let a=document.getElementById("op").value;
//    console.log(a);
    
