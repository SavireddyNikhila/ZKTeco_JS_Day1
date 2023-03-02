function myFunction(){
    document.getElementById("demo1").innerHTML="Paragraph changed.";
}

window.alert("Click on Ok");
const x = {firstName:"Nikhila",lastName:"Savireddy"};

console.log(x);
 
function addFunction(a,b){
    return a+b;
}
const person = {
    firstName:"Nikhila",
    lastName:"Savireddy",
    age:21,
    fullName: function(){
        return this.lastName+this.firstname;
    }
};
person.firstname="Sravani";

let text="Apple, Banana, Kiwi";
let part=text.slice(7,14);

const cars=["BMW","Audi","Nano"];
cars.pop();
cars.push("Volvo");
cars.push("Toyota");
cars.push("Volkswagen");

const hour=new Date().getHours();
let greeting;
if(hour<18){
    greeting="Good day";
}
else{
    greeting="Good evening";
}

