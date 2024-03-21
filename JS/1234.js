'use strict'

// // Область видимости переменных 
// let a = 100
// let b = 200

// function test() {
//     let a 
//     a = 10
//     // b = true      // изменит переменную в глобальной области видимости  
//     console.log(a)   // 10
//     console.log(b)   // 200    // возьмет значение глобальной переменной
// }

// test()
// console.log(a)      // 100
// console.log(b)      // 200
// // ----------------------------------------------------------------------------------


// // цепочка областей видимости
// let a = 10

// function myFn() {
//     function innerFn() {
//         // a = 30
//         console.log(a)     // 10
//     }
//     innerFn()              // тут просто вызываем функцию внутри другой что бы она сделала вывод в консоль
// }
// // innerFn()               // error      // при таком вызове вункции будет ошибка т.к. переменной innerFn мы объявили в локальной области видимости и нет доступа к ней из глобальной области.
// myFn() 
// // console.log(a)
// // -------------------------------------------------------------------------------------


// // жизненный цикл переменных 
// let a
// let b 

// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log(b)      // 10
// }

// myFn()

// console.log(a)          // true
// console.log(b)          // undefined
// // -------------------------------------------------------------------------------------


// // логические операторы

// // оператор ! (НЕ) всегда возвращает bolean значение 
// let operOtr = ''
// console.log(!!operOtr)     // false

// // выражение1 && выражение2     (И) возвращает первое ложное значение, остальное игнорируется, если не нашлось, то возвращает последнее выражение 
// console.log(4-4 && 2)     // 0

// // выражение1 || выражение2     (ИЛИ) возвращает первое истинное значение, остальное игнорируется, если не нашлось, то возвращает последнее выражение 
// console.log(4-1 || 2)     // 3
// console.log(4-4 || 2 || console.log('выполнено') || 0)   // 2   // тут видим, что при работе интерпритатор не доходит до выражения вывода в консоль
// // -------------------------------------------------------------------------------------


// // оператор разделения объекта на свойства  ( ...(объект)) только первый уровень вложенности

// const button = {
//     width: 200,
//     text: 'buy',
//     color: 'green',     
// }

// const redButtonV1 = {
//     ...button,
//     color: 'red'            // посторяющиеся значение будет перезаписано
// }

// const redButtonV2 = {
//     color: 'red' ,          // посторяющиеся значение не будет перезаписано
//     ...button
// }

// console.log(button)               // { width: 200, text: 'buy', color: 'green' }
// console.log(redButtonV1)          // { width: 200, text: 'buy', color: 'red' }
// console.log(redButtonV2)          // { color: 'green', width: 200, text: 'buy' }

// const coppyButton = {...button}   // тут создали копию объекта, но только на первом уровне вложенности
// console.log(coppyButton)          // { width: 200, text: 'buy', color: 'green' }

// const union = {                     // объединение объектов. только первый уровень вложенности
//     ...button,
//     ...redButtonV1                // порядок влияет на перезапсь свойств в объектах. (ведхний удалитьс, нижний сохраниться)
// }
// console.log(union)                // { width: 200, text: 'buy', color: 'red' }

// // -------------------------------------------------------------------------------------


// // Шаблонные строки ( ``  обратные кавычки)  в ${любое выражение}

// const myName = 'Павел'
// const city = 'Рязан'
// const aboutMe = `Меня зовут ${myName}, я живу в  ${city}и`
// console.log(aboutMe)    // Меня зовут Павел, я живу в  Рязани

// // -------------------------------------------------------------------------------------


// //  обявленная функция или функциональное выражение (анонимная функция)

// function myFn (a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFn(10, 5))    // 16

// const myFnV1 = function(a, b) {        // присвоили функциональное выражение переменной. преимущество присвоения анонимной функции константе в том, что ее нельзя случайно переназначить
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFnV1(1, 3))    // 5       // передаем аргументы для функции в переменную в скобках 

// setTimeout( function() { console.log('колбек функция') }, 2000)         // функциональное выражение (анонимная функция) в другой функции

// // -------------------------------------------------------------------------------------


// // стрелочные функции,  является выражением, всегда анонимные, преимущество присвоения анонимной функции константе в том, что ее нельзя случайно переназначить

// const myFn = (a, b) => {             // тут стрелочную функцию присвоили переменнной.  
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFn(2, 5))         // 8

// setTimeout(() => {console.log('стрелочная функция колбек')}, 2000) 

// const test = (a, b) => a + b    // стрелоч. функц. с одним выражением  возможно убрать фигурные скобки, но тогда она вернет результат этого выражения (return не явно указан) 
// console.log(test(2, 4))         // 6

// // -------------------------------------------------------------------------------------


// //  значения параметров функции по умолчанию

// // в примере создаем копию объекта и прибавляем время когда функкция отработала с помощью вставки параметра по умолчанию 
//         // // ниже не явно возвращаем объект из функции  . тут синтаксис ({})
//         // тут нужно разобраться https://www.youtube.com/watch?v=CxgOKJh4zWE&t=36944s      5.01.48 время
//         // const newPost = (post, addedAd = Date()) => ( {
//         //     ...post,
//         //     addedAd,
//         // } )

// const postMessage = {
//     title: 'сообщение',
//     text: 'привет, я текст',
// }

// function newPost (post, addedAd=Date()) {
//     return {
//         ...post,
//         addedAd: addedAd,   // или сокраащенно addedAd, т.к. имя в создаваемом объекте не захотели изменять
//     }
// }

// const newPostMessage = newPost(postMessage)
// console.log(newPostMessage)           //{ title: 'сообщение',text: 'привет, я текст', addedAd: 'Mon Mar 18 2024 12:10:58 GMT+0300 (Москва, стандартное время)' }
// // -------------------------------------------------------------------------------------


// // обработка ошибок   при таком методе код не останавливается
// const fnWithError = () => {
//     throw new Error('моя ошибка') // тут искуственно гененрируем ошибку
// }

// try{
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }

// console.log('продолжить')
// // -------------------------------------------------------------------------------------


// Инструкции выражения  как отличить
// выражения можем подставить как аргументы в функции. это код, который после выполнения возвращает какое-либо значение. Например, 5 + 3
// инструкции не можем подставить как аргументы в функции. в конце ставим ; это отдельная команда в коде, которая выполняет определённое действие. Например, if
// function myFn(a) {
//     console.log(a)
// } 


// // массивы
// const myArray = [1, 3, true, 'привет']
// console.log(myArray)

// const myArray1 = new Array(1, 3, true, 'привет')
// console.log(myArray1)

// console.log(myArray.length) // так получим длинну массива . она  обновляется автоматически
// console.log(myArray == myArray1) //  fulse   внешне массивы одинаковы . но это ссылки объекты и ссылаються на разные объекты 

// const myArray2 = myArray1 
// console.log(myArray2 == myArray1)  // true т.к. тут сравниваем ссылки на массивы (объекты) . и ссылки ссылаютя на один и тот же массив (объект)
// console.log(myArray1[1])  // дает значение элемента массива . так обращаемся к свойствам массива. т.к. массив это объект, а к цифровым свойствам объекта обращаються через []

// myArray[2] = 'abc'  // меняем значение
// console.log(myArray)

// const myArray3 = [1, 2, 3, 4]
// myArray3.forEach((el) => console.log(el * 2))  // вызов функции длякаждого эл. не мутирут массив .
// console.log(myArray3) 
// console.log(myArray3.forEach((el) => console.log(el * 2))) // ниего не возвращает undefined

// const myArray4 = myArray3.map((elem) => elem * 3)  // создали новый массив не меняя старый и для каждого эл. сработала функция . переданная функция должна возвращать результат который запишется в новый массив. в примере результат возвращается не явно
// console.log(myArray4) 

// const myArray5 = myArray3.map((elem) => {     //  тут не возвратили результат выполнения функции поэтому в массиве undefined,
//     elem = elem * 3
//     // // return elem
// })
// console.log(myArray5)

// // -------------------------------------------------------------------------------------

// //ДЕСТРУКТУРИЗАЦИЯ
// // создаем переменные и присваиваем значения на основании свойств объекта
// const obj = {                // деструктуризация объектов
// 	myName: 'Pavel',
// 	age: 35,
// 	man: true,
// }
// const { myName, age } = obj  // conct или let, var {имена свойств обекта(запятая),} = из какого обекта достаем       тут получаем переменную myName = 'Pavel' и т.д.
// console.log(myName)          // Pavel    создалась переменная с именем из объекта и значением из объекта

// const massive = [ 14, true, 'Pavel' ]   // деструктуризация массивов
// const [ oneElem,  twoElem ] = massive   // conct или let, var [ придумываем имена новых переменных в нужном порядке ] = из какого массива достаем    тут получаем переменную oneElem = 14 и т.д.
// console.log(twoElem)  // true              значения переменным присваиваются по порядку следования элементов в массиве

// const userInfo = function ({myName, age}) {    // диструктуризация в функциях   внутри () диструктуризация параметров функции
//     if (age < 18) {                            // создаются переменные внутри функции(const let не нужно указывать), ищются свойства в объекте по названию (myName, age), им присваиваются значения согласно объекта. п 
//         return console.log(`${age} меньше положенного`)
//     }
//     return console.log(`${myName} твой возраст ${age} `)
// }
// userInfo(obj)    // тут в функцию передаем объект. в блоке парасетров () выполняем диструктуризацию объекта
// // -------------------------------------------------------------------------------------


// //-------------------------------------------УСЛОВИЯ----------------------------------------------
// const person  = {
//     myName: 'Pavel',
// }
// if(!person.age) {                     // тут в условии вернется undefined, а !undefined вернет true
//     console.log('возраст не указан')   
// }
// console.log(person.age) 

// let age =  20
// if(age > 18) {
//     console.log('взрослый')
// } else if (age >= 12) {
//     console.log('подросток')
// } else {
//     console.log('ребенок')
// }
// // перепишем  код без  else if
// if(age >= 18) {
//     console.log('взрослый')
// } 
// if(age > 12 && age <=18) {
//     console.log('подросток')
// } 
// if(age < 12) {
//     console.log('ребенок')
// }

// const myFn = (a) => {              // условия в функциях. функция остановиться при return в любом месте
//     if(a > 10) {                   //  нет особого смысла использовать if else   но делать так можно
//         return a = a + 10          // если тут условие истино, тогда будет событие return и функция остановиться
//     } 
//     if (a > 20) {
//         return a = a + 100         // return может быть в каждой проверке если это необходмио опционально 
//     } 
//     return a * 320
// } 
// console.log(myFn(3))

// let age2 = 19
// switch (true) {                               // может быть не только true . в () происходит строгое сравнение === например можно сравнивать с числом 3
// 	case age2 >= 18:                          // это строго сравниваем === с выражением в ()
//         console.log('больше или равно 18')
// 		// break;							  // если не писать break, тогда код ниже выполниться но условия сравниваться не будут 
// 	case age2 == 18:
// 		console.log('18')
// 		// break;
// 	case age2 < 18:
// 		console.log('меньше 18')
// 		break;                                // если не писать break, тогда код ниже выполниться но условия сравниваться не будут. до ближайшего break
// 	default:                                  // аналог else , если ни одно из условий не совпало
//         console.log('не число')
// }

// // условаие ? выражение1 : выражение2    // тернарный оператор, является выражением(возвращает значение) т.е. вернет РЕЗУЛЬТАТ выражения1 или  выражения2 в зависимости от условия. 
// // в условии пишем любые выражения и затем они автоматически конвертируются в булевое значение. если true тогда возвращается выражения1, если fulse вернет выражение2. 
// // результат одного из выражений будет возвращен(можно записать в переменную). можно использовать только выражения (не инструкции if for и пр.)  

// const value = 0
// value ? console.log('условие истино') : console.log('условие ложно')   // это выражение инструкция ,  мы не присваиваем ничему значение. просто выполним действия.  но и тут все это выражение вернет undefined . т.к. console.log()  возвращает undefined
// console.log(value ? console.log('условие истино') : console.log('условие ложно')  )

// const value1 = 23
// const value2 = 43
// value1 && value2 ? myFunction1(value1, value2) : myFunction2()    // в варажения можем подставлять функцию, тут если любое из числел не 0, тогда выполниться myFunction1(value1, value2)

// const value3 = 4
// console.log(value3 >= 10 ? value3 + 10 : value3 + 100)       // тут непосредственно возвращаем результат выражения. например можно присвоить переменной

// const value4 = 30
// let rez = (value4 >= 10 ? value4 + 10 : value4 + 100)       // тут непосредственно возвращаем результат выражения. например можно присвоить переменной
// console.log(rez)
// // -------------------------------------------------------------------------------------