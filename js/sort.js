let arraySize = 10;
let min = 3;
let max = 250;

let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray() {
	for(var i = 0; i < arraySize; i++) {
		array[i] = generateArrayValue(min, max);
		
		if(array[i] == array[i - 1]) {
			array[i] = generateArrayValue(min, max);
		}
	}
}

function generateArrayValue() {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log(array);

function bubbleSort() {
	sortedArray = Array.from(array);
	for(var i = 0; i < arraySize; i++) {
		for(var j = 0; j < arraySize - 1; j++) {
			if(sortedArray[j] > sortedArray[j + 1]) {
				var x = sortedArray[j];
				sortedArray[j] = sortedArray[j + 1];
				sortedArray[j + 1] = x;
			}
		}
	}
	confirm('Sort with BubbleSort Algoritm Now')
}
