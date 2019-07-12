function findTheSum(m, n) {
    let listOfDivisorsArr = [];
    let numArr = [];

    for (m; m<= n; m++) {
        numArr.push(m);
        let arr = findDivisors(m);
        listOfDivisorsArr.push(arr);
    }

    let ansArr = [];
    for(let i =0; i <= listOfDivisorsArr.length -1; i++) {
        let total = sumOfDivisorsArray(listOfDivisorsArr[i]);
        if(isSquare(total)) {
            let ans = [];
            ans.push(numArr[i]);
            ans.push(total);
            ansArr.push(ans);
        }
    }
    return ansArr;
}

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

function findDivisors(num) {
    let ansArr = [];

    for(let i =1; i <= num; i++) {
        if(num % i ===0) {
            ansArr.push(i);
        }
    }
    return ansArr;
}

function sumOfDivisorsArray(divisorArr) {
    return divisorArr.reduce((first, next) =>{
        return first + Math.pow(next, 2);
    });
}

// let divisorArr = findDivisors(246);
// console.log(sumOfDivisorsArray(divisorArr));
console.log(findTheSum(1, 250));