// let button1 = document.querySelector('.btn')         // находим элемент который будем слушать.
// let button2 = document.querySelectorAll('.btn')      // находим все элементы которые будем слушать, но их необходимо перебирать для событий. 

// button1.addEventListener('click', function() {     // ловит событие, принимает событие которое слушаем 'click' , колбекфункция(та которую сами не вызываем).
//     console.log('клик')                            // клик в консоле при клике на найденную кнопку.
// } ) 

// let handelClick22 = function () {                   // можем создать отдельную функцию выыполняемую при событии.
//     console.log('клик2') 
// }

// button1.addEventListener('click', handelClick22)    // можем вписать переменную присвоенную функции которая будет выполняться при сработке события. не вызываем ее                       
// button1.removeEventListener('click', handelClick22) // перестаем слушать текушее событие. для оптимизации прослушивание событий нужно отключать когда это не требуется

// button2.forEach( function(el) {                     // элементы найденный с querySelectorAll необходимо перебирать в цикле
//     el.addEventListener('click', handelClick22)     // вычленяем с помощью перебора каждый элемент и применяем к нему addEventListener
//     }
// )
// // event.target            // целевой элемент. в какое именно место папал клик мышки.  в какую цель. это именно тот элемент на котором произошло событие.
// // event.currentTarget     // получим именно тот элемент на которое его повесили. например когда есть вложенность других элементов в кнопке
// // this при использовании стрелочной функции выдает не то что ожидаем
// let handelClick33 = function (event) {           // можем создать отдельную функцию выполняемую при событии. в нее передаем так называемый event
//     console.log('кликEvent')
//     console.log(event)                           // получем объект со всеми параметрами куда кликнули. какой кнопкой. координаты и пр.
//     console.log(event.target)                    // получаем непосредственно сам элемент по которому совершен клик. например  <button class="btn">click444</button>
//     console.log(event.target.dataset)            // читаем атрибут data- у HTML документа.  
//     console.log(event.target.dataset.num1)       // опратившись по имени атребута, можем считать его значение в виде строки.
//     console.log(event.target.textContent)        // даже есть возможность получить текстовое содержимое элемента куда кликнули. и многое другое
//     console.log(event.currentTarget)             // получим именно тот элемент на которое его повесили. например когда есть вложенность других элементов в кнопке
//     event.stopPropagation()                      // остановит всплытие кликов. т.е. если у родителя елемента на который кликаем, есть тоже клик, то он не сработает . тут нет примера
// }
// button2.forEach(function(el) { 
//     el.addEventListener('click', handelClick33)     // вместо handelClick33 можем прямо тут написать функцию и передать туда event.
//     }
// )

// let btnBlock = document.querySelector('#btnBlock')   // найдем родителя группы кнопок 
// function sobutie() {                                 // эту функцию будем выполнять при успешном клике
//     console.log('делегирование сработало')
// } 
// function delegirovanie (event) {              // функция проверки клика на необходимый элемент
//     if(event.target.closest('button')) {      // closest('исковый эл') ищит у ближайшего предка совпадение записанное в скобках.  в данном примере тег button
//         sobutie()                             // если находим такой элемент, тогла выполняем функцию первоначальную
//     }                                    // closest если не найдет тогда null что соответствует булевому fulse.
// }
// btnBlock.addEventListener('click', delegirovanie)  // назначим обработчик на родителя круппы кнопок








