

function sumOfProduct(n1,n2){
    let sum = 0;
    while(n1> 0 && n2 > 0){
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;
        sum += digit1 * digit2;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);

    }
    return sum;
}

const n1 = parseInt(process.argv[2]);
const n2 = parseInt(process.argv[3]);
console.log(sumOfProduct(n1, n2));