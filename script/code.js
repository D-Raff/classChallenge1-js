// functionality
let numbers = [12, 18, 11, 5, 8, 2]
console.log(numbers);

function middleNum () {
    if (numbers.length % 2 == 0) {
        let x = [ numbers[(numbers.length / 2) - 1], numbers[numbers.length / 2] ];
        console.log(x);
    }else if (numbers.length % 2 > 0) {
        let y = numbers[parseInt(numbers.length / 2)]
        console.log(y);
    }
    
}
middleNum()