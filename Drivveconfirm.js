let = runAgain=true
while(runAgain){
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if(age<0){
    console.error("please enter a valid age")
    break;
}
const canDrive = (age) =>{
    return age>=18?true:false
}
if (canDrive(age)){
  alert("Yes you can drive")
}
else{
  alert("you can not drive")
}
runAgain=confirm("Do you want me to repeat?")
}