function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0;
    arrayOfSheep.forEach((sheep) =>{
        if(sheep === true) {
            count ++;
        }
    });
    return count;
}