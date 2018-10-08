/*ЗАДАНИЕ А*/
let number = 3456;
let changeNumber = 0;
let mod = 10;

while (number > 0){
	changeNumber += Math.pow(10,String(number).length-1) * (number % mod);
	number = Math.floor(number / mod);
}
console.log("changeNumber: " + changeNumber);

/*ЗАДАНИЕ Б*/
numberArray = [0,0,0,0,0,1,2,2,2,2,2,2,2];
let count = 1;
let max = 0;
for (let i = 0; i <numberArray.length-1; i++) {
	if (numberArray[i] == numberArray[i+1]) {
		count++;
		if (max < count) max = count;
	}
	else count = 1;
}
console.log("count: " + count);

/*ЗАДАНИЕ С*/
let stringC = "(((((())))))";
let countLeft = 0;
let countCorrect = 0;
for (let i = 0; i<stringC.length;i++){
	if (stringC[i] == "("){
		countCorrect++;
		countLeft++;
	}
	else countCorrect--;
	if (countCorrect<0) break;
}
if (countCorrect == 0){
	console.log("Correct");
	console.log("countLeft: " + countLeft);
}
else console.log("Incorrect");