
function findTax(salary){
    switch (true) {
        case ( salary>0 && salary <= 500000):
            return 0;
        case ( salary > 500000 && salary <= 1000000):
            return salary * 0.1;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.2;
        case (salary > 1500000):
            return salary * 0.3;
        
    }
}

const salary = parseFloat(process.argv[2]);

console.log(findTax(salary));