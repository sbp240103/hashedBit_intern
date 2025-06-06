let str = 'I love my India';

let i=0;
let result = '';
let temp = '';
while(i<str.length){
    if(str[i]===' '){

        result = ' ' + temp + result;
        temp = '';
    }
    else{
        temp+= str[i];
    }
    i++;
}

if(temp.length > 0){
    result = temp + result;
}
console.log(str);
console.log(result);