// Для перебора коллекции мы можем использовать for..of: (НЕ ИСПОЛЬЗУЙ for..in ) Методы массивов не будут работать.
Array.from:  мы можем создать настоящий массив из коллекции.  alert( Array.from(document.body.childNodes).filter )
children // коллекция детей, которые являются элементами.
firstElementChild, lastElementChild // первый и последний дочерний элемент.
previousElementSibling, nextElementSibling // соседи-элементы.
parentElement // родитель-элемент.
document.getElementById('idName')  // (живая коллекция) получение элемента по id. если есть дифис  id="elem-content" document.getElementById['elem-content'] обращение через квадратные скобки
document.querySelectorAll('ul > li:last-child')  // вернет КОЛЛЕКЦИЮ всех найденных элементов. :hover и :active также поддерживаются
document.querySelector('css') // возвращает первый элемент, соответствующий данному CSS-селектору.  аналог document.querySelectorAll('css')[0]
elem.matches(css)  // проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false. elem.matches('a[href$="zip"]')
elem.closest(css)  // ищет (ВВЕРХ) ближайшего предка, который соответствует CSS-селектору. Сам элемент  включается в поиск.  null, если не найден.
elemA.contains(elemB) // вернёт true, если elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
innerHTML // позволяет получить HTML-содержимое элемента в виде строки.  можем изменять его.
outerHTML // содержит HTML элемента целиком. Это как innerHTML плюс сам элемент. Будьте осторожны: в отличие от innerHTML, запись в outerHTML не изменяет элемент. Вместо этого элемент заменяется целиком во внешнем контексте.
nodeValue и data  //  читать или изменять текстовый узел.
textContent  // предоставляет доступ к тексту внутри элемента за вычетом всех <тегов>. возможно перезаписывать текст.
hidden        //  указывает на то, видим ли мы элемент или нет.

///////////////////////// ОБРАБОТЧИКИ СОБЫТИЙ ///////////////////////////////////////////////////////

let button1 = document.querySelector('.btn')         // находим элемент который будем слушать.
let button2 = document.querySelectorAll('.btn')      // находим все элементы которые будем слушать, но их необходимо перебирать для событий. 

button1.addEventListener('click', function() {     // ловит событие, принимает событие которое слушаем 'click' , колбекфункция(та которую сами не вызываем).
    console.log('клик')                            // клик в консоле при клике на найденную кнопку.
} ) 

let handelClick22 = function () {                   // можем создать отдельную функцию выыполняемую при событии.
    console.log('клик2') 
}

button1.addEventListener('click', handelClick22, 'capture': true)    // можем вписать переменную присвоенную функции которая будет выполняться при сработке события. не вызываем ее, есть необязательные параметры например  'capture' сработка события при погружении                     
button1.removeEventListener('click', handelClick22)     // перестаем слушать текушее событие. для оптимизации прослушивание событий нужно отключать когда это не требуется

button2.forEach( function(el) {                     // элементы найденный с querySelectorAll необходимо перебирать в цикле
    el.addEventListener('click', handelClick22)     // вычленяем с помощью перебора каждый элемент и применяем к нему addEventListener
    }
)
// event.target            // целевой элемент. в какое именно место папал клик мышки.  в какую цель. это именно тот элемент на котором произошло событие.
// event.currentTarget     // получим именно тот элемент на которое его повесили. например когда есть вложенность других элементов в кнопке
// this при использовании стрелочной функции выдает не то что ожидаем
let handelClick33 = function (event) {           // можем создать отдельную функцию выполняемую при событии. в нее передаем так называемый event
    console.log('кликEvent')
    console.log(event)                           // получем объект со всеми параметрами куда кликнули. какой кнопкой. координаты и пр.
    console.log(event.target)                    // получаем непосредственно сам элемент по которому совершен клик. например  <button class="btn">click444</button>
    console.log(event.target.dataset)            // читаем атрибут data- у HTML документа.  
    console.log(event.target.dataset.num1)       // опратившись по имени атребута, можем считать его значение в виде строки.
    console.log(event.target.textContent)        // даже есть возможность получить текстовое содержимое элемента куда кликнули. и многое другое
    console.log(event.currentTarget)             // получим именно тот элемент на которое его повесили. например когда есть вложенность других элементов в кнопке
    event.stopPropagation()                      // остановит всплытие кликов. т.е. если у родителя елемента на который кликаем, есть тоже клик, то он не сработает . тут нет примера                  
}
button2.forEach(function(el) { 
    el.addEventListener('click', handelClick33)     // вместо handelClick33 можем прямо тут написать функцию и передать туда event.
    }
)

let btnBlock = document.querySelector('#btnBlock')   // найдем родителя группы кнопок 
function sobutie() {                                 // эту функцию будем выполнять при успешном клике
    console.log('делегирование сработало')
} 
function delegirovanie (event) {              // функция проверки клика на необходимый элемент
    if(event.target.closest('button')) {      // closest('исковый эл') ищит у ближайшего предка совпадение записанное в скобках.  в данном примере тег button
        sobutie()                             // если находим такой элемент, тогла выполняем функцию первоначальную
    }                                         // closest если не найдет тогда null что соответствует булевому fulse.
}
btnBlock.addEventListener('click', delegirovanie)  // назначим обработчик на родителя круппы кнопок


document.createElement(tag)           // cоздаёт новый элемент с заданным тегом.
el.outerHTML = 'dobavit html el'      // содержаться открывающий и закрывающий тег самого элемента. считать содержимое элемента в виде HTML-строки или установить новый HTML. нельзя передать DOM-элемент. перерисовка страницы. 
el.innerHTML = 'dobavit html el'      // не содержаться открывающий и закрывающий тег самого элемента. считать содержимое элемента в виде HTML-строки или установить новый HTML. нельзя передать DOM-элемент. перерисовка страницы. 
el.className = 'nameClass'            // добавление класса в html
el.innerText = 'dobavit text v teg'   // считывать или задавать текстовое содержимое элемента. возвращается строка с текстовым содержимым всех вложенных дочерних элементов. не считывается тег <script> и <style> и скрытых элементов.
el.textContent = 'dobavit text v teg' // считывать или задавать текстовое содержимое элемента. вернет текст всех вложенных элементов, даже если скрыты CSS .
el.style.cssText = 'color: blue; border: 1px solid black'  // получает и устанавливает инлайновые стили элемента, т.е. в HTML

node.append(...nodes or strings)      // добавляет узлы или строки в конец node,
node.prepend(...nodes or strings)     // вставляет узлы или строки в начало node,
node.before(...nodes or strings)      // вставляет узлы или строки до node,
node.after(...nodes or strings)       // вставляет узлы или строки после node,
node.replaceWith(...nodes or strings) // заменяет node заданными узлами или строками.

node.firstElementChild         // прямой доступ к первому  дочернему элементу
node.lastElementChild          // прямой доступ к последнему дочернему элементу
node.previousElementSibling    // содержит предыдущий элемент, находящийся в этом же родителе
node.nextElementSibling        // содержит следующий элемент, находящийся в этом же родителе.

elem.insertAdjacentHTML('куда', 'html')  // вставлять произвольный HTML в любое место документа, в том числе и между узлами!
beforeBegin  // перед elem.
afterBegin   // внутрь elem, в самое начало.
beforeEnd    // внутрь elem, в конец.
afterEnd     // после elem.


