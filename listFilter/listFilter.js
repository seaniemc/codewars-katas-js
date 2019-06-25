function filter_list(l) {
    let filteredArr = l.filter(function(x){ return (typeof(x) === 'number') });
    return filteredArr;
}

let test = [1,'a','b',0,15];
console.log(filter_list(test));