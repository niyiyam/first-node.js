var while_i = 0;
while(while_i<10){
    console.log('while문')
    while_i++;
}
for(var for_i = 0; for_i < 10; for_i++){
    console.log('for문')
}
var list = [1, 2, 3, 4];
for (var for_of_i of list){
    console.log('for of 문')
}
var obj = {
    'key1' : 'value1',
    'key2' : 'value2',
    'key3' : 'value3'
}
for (var for_in_i in obj){
    console.log('for in 문')
}