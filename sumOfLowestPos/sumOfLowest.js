function sumTwoSmallestNumbers(numbers) {
    let sum = 0;
    numbers.sort((a, b) => a - b);
    if (numbers[0] < 0) {
        let filteredArr = numbers.filter(function(x){ return x > -1 });
        sum = filteredArr[0] + filteredArr[1];
        return sum;
    } else {
        sum = numbers[0] + numbers[1];
        return sum;
    }
}

let testArr = [5, 9, 2, -6, 8, 3, -11]; 

sumTwoSmallestNumbers(testArr);