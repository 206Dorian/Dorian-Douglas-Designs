function calculateArea(width, height) {

var area = width * height;
return area;
}

var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

console.log(wallOne, wallTwo)

function getSize(width, height, depth) {

    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}

var areaOne = getSize(5, 10, 5) [1];
var volumeOne = getSize(3, 5, 3)


console.log(areaOne, volumeOne)


// function haiGay() { 

//     let greet = 'Hai Gay' ;
//     let gay = name;
// }
//     console.log (greet, name)












// const  numbers = [3, 4];
// numbers.push(5,6);
// numbers.splice(2, 0, 'a', 'b')
// numbers.unshift(1,2);
// console.log(numbers.indexOf(1));
// console.log(numbers.includes(1));

// console.log(numbers);


