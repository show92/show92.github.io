function myFunc(){
 var x =parseInt( document.getElementById("num1").value);
 console.log(x);
 var op =( document.getElementById("symbol").value);
 console.log(op);
 var y =parseInt(  document.getElementById("num2").value);
 console.log(y);

switch(op){
    case '+' :
        result = x + y;
        break;
    
    case '-':
        result = x - y;
        break;
    
    case '*':
        result = x * y;
        break;

    case '/':
        result = x / y;
        break;
    
    case '%':
        result = x % y;
    
}

document.getElementById("result").innerHTML= result;

alert(result);
console.log(result);
}
