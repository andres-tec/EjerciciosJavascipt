let array_1 = [1, 2, 0, 8, 6, 7, 9];

let menor = 0;
let mayor = 0;
let base = 0;
let index_1 = 1;
for (let index = 0; index < array_1.length; index++) {


    if (array_1[index_1] >= array_1[index]) {
        mayor = array_1[index_1];               //2 2
        console.log(array_1[index_1]);


    } else {
        mayor = array_1[index]; //2 8
        console.log(array_1[index]);
        index_1++;
    }


}

console.log("el numero mayor en el vector es:", mayor);
