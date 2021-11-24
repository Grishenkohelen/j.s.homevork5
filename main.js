// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
//
//  let calcRect = (a, b) => {
//
// console.log(a*b);
// }
// let result = calcRect(9, 2);

// - створити функцію яка обчислює та повертає площу кола

 let calcRound = (r) => {

     console.log(Math.PI*Math.pow(r,2));
}
let result = calcRound(78);


// - створити функцію яка обчислює та повертає площу циліндру

let calcCilindr = (r,h) => {
   console.log(2*Math.PI*r*h) ;
}
let result = calcCilindr(5,2);


// - створити функцію яка приймає масив та виводить кожен його елемент


let printArray = (arr) => {
    for (const item of arr) {
        document.write(arr);
    }
}
printArray(arr)
let arr= ['prais', 897, 567, true, false, 78, ];

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент



const createP = (text) => {
    document.write(`<p>${text}</p>`);
}
let text = 'Функция может вернуть результат, который будет передан в вызвавший её код.'




// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

 let creatT = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createT2 = (text,size) => {
    document.write(`<ul>`);
    for(let i = 0; i < size; i++ ){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
let size=3;
let text='Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции).'

 document.write(createT2(text,size));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let printArray2 = (arr) => {
    document.write(`<ul>`);
    for(const item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
printArray2([true, false, 456, 789, 'Функции являются основными «строительными блоками» программы.']);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let printArray = [{id: 1, name: 'Vasia', age: 15}, {id: 2, name: 'Valia', age: 32}, {id: 3, name: 'Vlad', age: 23}];
let  printArrObjects = (arr) => {

    for(const item of arr){
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
    }
}
printArrObjects(printArray)