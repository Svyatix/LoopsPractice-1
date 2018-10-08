/*ЗАДАНИЕ А*/
let number = 3456;
let changeNumber = 0;
let mod = 10;

while (number > 0){
	changeNumber += Math.pow(10,String(number).length-1) * (number % mod);
	number = Math.floor(number / mod);
}
console.log("changeNumber: " + changeNumber);