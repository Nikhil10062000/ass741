var num1="";
var num2="";
var num3="";
var total="";
var calc=document.getElementById("calc");
calc.addEventListener('click', fun)
function fun()
{
  num1 = parseInt(document.getElementById("one").value);
  num2 = parseInt(document.getElementById("two").value);
  num3 = parseInt(document.getElementById("three").value);
  if(num1 && num2 && num3)
  {
    total = num1 + num2 + num3;
    document.getElementById("add").value = total;
    total = num1 * num2 * num3;
    document.getElementById("multiply").value = total;
    
  }
}