function callBack(name, age, task){
    task();
    console.log('Hello ', name);
    console.log('your age ', age);
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('take shower')
}
function takeLunch(){
    console.log("Taking Lunch");
}

callBack('Shakib', 17, washHand);
callBack('Rakib', 21, takeShower);
callBack('Shahed', 23, takeLunch);



function myDay(wakeUp, Breakfast, task){
console.log('Hello I wake up', wakeUp)
console.log('I breakfast with ', Breakfast);
task();
}

function ReadBook(){
    console.log('I read a book');
}

function Codding(){
    console.log('I practice Codding')
}

myDay('7AM', "Bread & ruti", Codding);