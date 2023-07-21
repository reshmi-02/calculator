var a=parseInt(prompt("Enter the first value"));
var operator=prompt("Enter the operator");
var b=parseInt(prompt("Enter the second value"));
document.write("value="+a+operator+b+"<br><br>");
var c;
switch(operator){
	case"+":c=a+b;
		document.write("The addition of this two numbers are "+c);
		break;
	case"-":c=a-b;
		document.write("The subraction of this two numbers are "+c);
		break;
	case"*":c=a*b;
		document.write("The multiplication of this two numbers are "+c);
		break;
	case"/":c=a/b;
		document.write("The division of this two numbers are "+c);
		break;
}