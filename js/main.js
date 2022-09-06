let array_4 = [1, 2, 5, 14, 24, 31, 50, 105];
let array_5 = [];
let paso1 = 0;
let paso2 = 0;
let index_2 = 1;
let index = 0;
for (index = 0; index < array_4.length; index++) {

    paso1 = array_4[index];  //1  
    paso2 = array_4[index_2];    //2  
    array_4[index] = paso2;  // 2 
    array_4[index_2] = paso1;//1  
    index_2++;  //2
    index++;
}


for (let index = 0; index < array_4.length; index++) {
    console.log("lista desordenada:", array_4[index]);

}