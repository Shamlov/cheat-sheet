str.match(regexp)      // Метод str.match(regexp) ищет совпадения с regexp в строке str.
str.matchAll(regexp)   // поиск всех совпадений вместе со скобочными группами.
str.split(regexp|substr, limit)    // Разбивает строку в массив по разделителю – регулярному выражению regexp или подстроке substr.
str.search(regexp)     //  возвращает позицию первого совпадения с regexp в строке str или -1, если совпадения нет.
str.matchAll(regexp)   // если нужны позиции других совпадений, то следует использовать другой метод, например, найти их все при помощи 
str.replace(str|regexp, str|func)  // метод поиска-и-замены, один из самых полезных. Этакий швейцарский армейский нож для поиска и замены в строке.
regexp.test(str)       //  ищет совпадение и возвращает true/false, в зависимости от того, находит ли он его.


let tag = 'как'
let regexp = new RegExp (`${tag}`, 'gi')       // так пишем если хотим вставить переменную    с  / / не получиться вставить переменную
console.log('привет как дела'.match(regexp))   //  [ 'как' ]    //возвращается массив

let regexp1 = /как/gi                          //  не допускают вставок переменных (наподобие ${...}). 
let str1 = 'кривет как дела'
console.log(str1.match(regexp1))        // [ 'как' ]   можно вставить переменную.   match - это поиск
console.log('мое имя Антон , точно антон'.match(/антон/gi))   //  [ 'Антон', 'антон' ]  можно писать выражение одной строкой
console.log('мое имя Антон , точно антон'.match(/антон/i))    //  ['Антон', index: 8, input: 'мое имя Антон , точно антон', groups: undefined] если не ставим g (глобальный поиск) то получим массив первого вхождения с дополнительной информацией
let test1 = 'мое имя Антон , точно антон'.match(/антон/i)
console.log(test1.length)    // 1     видим массив из 1 элемента.  по запросу test1[0]  найдем только  Антон   без дополнительной инфы. test1[1] и далее  undefined

let test2 = 'привет к дела'.match(/как/gi) || []   // если нет совпадений, то вернеться null. можно сделать как в этом примере, для возврата пустого массива
console.log(test2)  // []   видим пустой массив

i - //поиск не зависит от регистра: нет разницы между A и a
g - //поиск ищет все совпадения, без него – только первое.
m - //многострочный режим 
s - //включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
u - //включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (Символы из 4 байт воспринимаются как единое целое, а не как два символа по 2 байта.)
y - //режим поиска на конкретной позиции в тексте
d - //результат регулярного выражения помещается в массив, который содержит дополнительную информацию о регулярном выражении, например индексы начала и конца подстрок. Этот флаг не меняет поведение регулярного выражения, а лишь предоставляет дополнительную информацию.

\d – цифры.  символ от 0 до 9.
\D – не цифры.
\s – пробельные символы, табы, новые строки.
\S – все, кроме \s.
\w – латиница, цифры, подчёркивание '_'.
\W – все, кроме \w.  русские буквы принадлежат этому классу.
. – любой символ, если с флагом s, в противном случае любой символ, кроме перевода строки \n. Точка означает «любой символ», но не «отсутствие символа»

let regexp2 = /Василий/ig     //  создаем регулярное выражение 
let test3 = 'привет, мое имя Василий'.replace(regexp2, '$& и Маша')     // str.replace(regexp, replacement) заменяет совпадения с regexp в строке str на replacement 
console.log(test3)     //  привет, мое имя Василий и Маша  //  замена произошла . $& это спецсимвол замены и добавления есть и другие
// $&	вставляет всё найденное совпадение   alert( "Люблю HTML".replace(/HTML/, "$& и JavaScript") ); // Люблю HTML и JavaScript
// $`	вставляет часть строки до совпадения
// $'	вставляет часть строки после совпадения
// $n	если n это 1-2 значное число, вставляет содержимое n-й скобочной группы регулярного выражения, больше об этом в главе Скобочные группы
// $<name>	вставляет содержимое скобочной группы с именем name, также изучим в главе Скобочные группы
// $$	вставляет символ "$"

tag2 = 'Петя'  
let regexp3 = new RegExp(`${tag2}` , 'i')   // для разнообразия создал так регулярное выражение
let test4 = regexp3.test('где наш Петя')    // regexp.test(str) проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false.
console.log(test4)     //   true

let str2 = '+7 925 864-38-38 my number'
regexp4 = /\d/g
console.log(str2.match(regexp4))      //  ['7', '9', '2', '5', '8', '6', '4', '3','8', '3', '8'] получим массив всех цифр по отдельности каждая
console.log(str2.match(regexp4)[3])   // 5  можем обратиться к массиву
console.log(str2.match(regexp4).join('')) // 79258643838     join('') - возвращает представление массива в виде строки, состоящей из значений всех элементов массива с разделителем('')

let srt3 = 'Ya izuchay CSS 33 i css5'
console.log(srt3.match(/CSS\s\d\d/gi))  // [ 'CSS 33' ]  тут скомпановали, символы слова CSS пробел\s  цифра\d цифра\d, любая через пробел \s

let str4 = '+7-925-864-35-38 Мой номер'
// let regexp5 = new RegExp (/d , 'g')   почему не работает?
let regexp5 = /\D/g                     // а так работает
console.log(str4.replace(regexp5, ''))   // 79258643538   получаем строку без нробелов

let str5 = "A ბ ㄱ 45 $";            // Юникодные свойства \p{…}   Есть  \P{…}  тоже самое только наоборот
console.log(str5.match(/\p{L}/gu))   // [ 'A', 'ბ', 'ㄱ' ]  не работает без  u   вернет массив со всеми буквами всех алфавитов
console.log(str5.match(/\p{N}/gu))   // [ '4', '5' ]  не работает без  u   вернет массив c цифрами
console.log(str5.match(/\p{Sc}/gu))  // [ '$' ]  валюта
let regexp6 = /x\p{Hex_Digit}\p{Hex_Digit}/u;
console.log("число: xAF dsbgn".match(regexp6));   // xAF   пример с шеснадцатиричным числом

Буквы L:   // в нижнем регистре Ll,  модификаторы Lm,  заглавные буквы Lt, в верхнем регистре Lu,  прочие Lo.
Числа N:   // десятичная цифра Nd,   цифры обозначаемые буквами (римские) Nl,  прочие No.
Знаки пунктуации P:    // соединители Pc,  тире Pd, открывающие кавычки Pi, закрывающие кавычки Pf, открывающие скобки Ps,  закрывающие скобки Pe,  прочее Po.
Отметки M (например, акценты):  // двоеточия Mc,  вложения Me,  апострофы Mn.
Символы S:      // валюты Sc,  модификаторы Sk,  математические Sm,  прочие So.
Разделители Z:  // линия Zl,  параграф Zp,  пробел Zs.
Прочие C:       // контрольные Cc,  форматирование Cf,  не назначенные Cn,  для приватного использования Co,  суррогаты Cs.
^ каретка, означает совпадение с началом текста.  let str1 = "Mary had a little lamb";  alert( /^Mary/.test(str1) ); // true
$ доллор - означает совпадение с концом текста.  let str1 = "it's fleece was white as snow";  alert( /snow$/.test(str1) ); // true
^...$   // используются для проверки, совпадает ли СТРОКА полностью с шаблоном полностью.
^ $, флаг "m" многострочный режим якорей,  //означают не только начало/конец текста, но и начало/конец каждой строки. В обычном режиме каретка ^ – это только начало текста, а в многострочном – начало любой строки. $ ведёт себя аналогично.
\b   Граница слова \b – проверка, как ^ и $. // alert( "Hello, Java!".match(/\bJava\b/) ); // Java      alert( "Hello, JavaScript!".match(/\bJava\b/) ); // null

let str6 = 'как поживает мой друг Андерей'
let str7 = 'Андерей'
let str8 = 'как'
let str9 = 'как поживает мой друг Андерей'
let regexp7 = new RegExp(`${str7}$`, 'giu')    // пишем $ после строки в регулярном выражении. возвращает окончание строки
let regexp8 = new RegExp(`^${str8}`, 'giu')    // ^  пишем перед строкой . возвращает начало строки
let regexp9 = new RegExp(`^${str9}$`, 'gui')   // ^...$   // для проверки, совпадает ли СТРОКА полностью с шаблоном полностью.
console.log(regexp7.test(str6))       //  true
console.log(regexp8.test(str6))       //  true
console.log(regexp9.test(str6))       //  true

let str10 = '12:45'
console.log(/^\d\d:\d\d$/.test(str10))   //  true   // для проверки, совпадает ли СТРОКА полностью с шаблоном полностью.

let str11 = 'Hello JavaScript'
let str12 = 'Hello Java! Script'
console.log(str11.match(/\bJava\b/gi))     // null  (\b граница слова)  НЕ РАБОТАЕТ С КИРИЛИЦЕЙ
console.log(str12.match(/\bJava\b/gi))     // [ 'Java' ] даже если после слова стоит ! знак или , и пр. все работает. ! не возвращает
console.log( "1 23 456 78".match(/\b\d\d\b/g) ); // [ '23', '78' ]   РАБОТАЕТ С ЦИФРАМИ

// Для поиска специальных символов [ ] \ ^ $ . | ? * + ( ), нам нужно добавить перед ними \ («экранировать их»).
// Нам также нужно экранировать /, если мы используем /.../ (но не new RegExp).
// При передаче строки в new RegExp нужно удваивать обратную косую черту: \\ для экранирования специальных символов, потому что строковые кавычки «съедят» одну черту.
console.log("\d\.\d");   // d.d  символы обратной косой черты «съедаются» строкой.  let regexp = new RegExp("\d\.\d");  alert( "Глава 5.1".match(regexp) ); // null  поэтому поиск не работает

let str13 = 'дом дам дим'
let test5 = str13.match(/д[оау]м/gi)    // набор, означает любой из 3-х символов о а у. соответствует ровно одному символу.
console.log(test5)    // [ 'дом', 'дам' ]

console.log('Привет, ч34 745 чр8 43 л34'.match(/ч[0-9А-Я][0-9]/gi))   //  [ 'ч34', 'чр8' ]  диапазон цифр и букв
console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi));        // @ и .   ^ исключающие диапазоны

[…] означают «искать любой символ из заданных». // [eao] означает любой из 3-х символов: 'a', 'e' или 'o'. [a-z] соответствует символу в диапазоне от a до z, или [0-5] – цифра от 0 до 5. соответствует ровно одному символу.
[^aeyo] – любой символ, за исключением 'a', 'e', 'y' или 'o'.  // Исключающие диапазоны
квантификатор — указывает, сколько их нам нужно скобках: {n}.
\b, чтобы исключить числа длиннее \b\d{5}\b
{3,5}, от 3 до 5 диапазон
\d{3,} найдёт последовательность чисел длиной 3 и более цифр  
+ «один или более». То же самое, что и {1,} \d+ находит числа (из одной или более цифр):
? «ноль или один». То же самое, что и {0,1} По сути, делает символ необязательным. let str = "Следует писать color или colour?"; alert( str.match(/colou?r/g) ); // color, colour
* Означает «ноль или более». То же самое, что и {0,}
//жадный режим по умолчанию. включить ленивый режим, вставив знак вопроса '?' после квантификатора,

let str16 = 'мне 65436 лет'   // квантификатор — это число в фигурных скобках: {n}.
let regexp10 = new RegExp ('\\d{5}','gi')               // тот случай с \\ ( строковые кавычки «съедят» одну черту.)
let regexp11 = new RegExp ('\\d\\d\\d\\d\\d', 'gi')     // квантификатор — это число в фигурных скобках: {n}.  эта запись расшифровка записи выше  \d взято 5 раз
console.log(str16.match(regexp10))    // [ '65436' ]
console.log(str16.match(regexp11))    //[ '65436' ]
console.log('меня зовут владик 435 и мне 45456 лет'.match(/\d{4,5}/gi))   //  [ '45456' ]     Диапазон: {3,5}, от 3 до 5, Верхнюю границу можно не указывать.Тогда шаблон \d{3,} найдёт последовательность чисел длиной 3 и более цифр:

let str17 = "+7(903)-123-45-67"
let regexp12 = new RegExp ('\\d+','gi')  // + Означает «один или более» или {1,}.,  ? Означает «ноль или один» или {0,1}.  *  «ноль или более». или {0,}. 
console.log(str17.match(regexp12))

let str18 = 'привет каккsккк настроение у вас'
let regexp13 = new RegExp ('как+','gi')    
console.log (str18.match(regexp13))   // [ 'какк' ]

console.log('gogogooooo'.match(/(go)+/gi))  // [ 'gogogo' ]   Скобки группируют символы вместе. Так что (go)+ означает go, gogo, gogogo и т.п.

let str19 = '<h1> Привет мир </h1>'
let test6 = str19.match(/<(.*?)>/)   //  нет флага g !!! (если использовать g массив совпадений, но без деталей о каждом) для поиска глобального с деталями используй matchAll
console.log(test6[0])  // создается массив в 0 индексе все совпадение целиком   <h1>
console.log(test6[1])  // создается массив и далее открываются скобки слева направо и вложенные скобки   h1

let results1 = '<h1> <h2>'.matchAll(/<(.*?)>/gi);   // возвращает не массив, а перебираемый объект.     results = Array.from(results); // превращаем в массив
for(let result of results1) {    // При поиске с флагом g, он возвращает каждое совпадение в виде массива со скобочными группами
    console.log(result)          // Если совпадений нет, он возвращает не null, а просто пустой перебираемый объект.
}
    // [ '<h1>', 'h1', index: 0, input: '<h1> <h2>', groups: undefined ]
    // [ '<h2>', 'h2', index: 5, input: '<h1> <h2>', groups: undefined ]

// возможно  давать скобкам имена.  ?<name>
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str20 = "2019-04-30 2020-01-01";
let test7 = str20.match(dateRegexp).groups;   // groups не забываем.  группы располагаются в свойстве groups результата match.
console.log(test7.year);    // 2019    теперь вызвыаем по именам а не по индексу
console.log(test7.month);   // 04
console.log(test7.day);     // 30

let dateRegexp2 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;   // если используем флаг g
let str21 = "2019-10-30 2020-01-01";
let test8 = str21.matchAll(dateRegexp2);
for(let result2 of test8) {
    let {year, month, day} = result2.groups;
    console.log(`${day}.${month}.${year}`);
  // первый вывод: 30.10.2019
  // второй: 01.01.2020
}

let str22 = "John Bull";          // str.replace(regexp, replacement), осуществляющий замену совпадений с regexp 
let regexp14 = /(\w+) (\w+)/;     // делается при помощи обозначений вида $n, где n – номер скобочной группы
console.log( str22.replace(regexp14, '$2, $1') ); // Bull, John        // для именованных скобок ссылка будет выглядеть как $<имя>.

let str23 = "Gogogo John!";
let regexp15 = /(?:go)+ (\w+)/i;     // Скобочную группу можно исключить из запоминаемых и нумеруемых, добавив в её начало ?:.
let test9 = str23.match(regexp15);
console.log( test9[0] );     // Gogogo John (полное совпадение)
console.log( test9[1] );     // John
console.log( test9.length ); // 2 (больше в массиве элементов нет)

Регулярное выражение A|B|C обозначает поиск одного из выражений: A, B или C.// Альтерация
Чтобы применить альтернацию только к части шаблона, можно заключить её в скобки: Люблю HTML|CSS найдёт Люблю HTML или CSS.   Люблю (HTML|CSS) найдёт Люблю HTML или Люблю CSS.
let regexp16 = /([01]\d|2[0-3]):[0-5]\d/g;
console.log("00:00 10:10 23:59 25:99 1:2".match(regexp)); // 00:00,10:10,23:59

X(?=Y)	Позитивная опережающая	X, если за ним следует Y
X(?!Y)	Негативная опережающая	X, если за ним НЕ следует Y
(?<=Y)X	Позитивная ретроспективная	X, если следует за Y
(?<!Y)X	Негативная ретроспективная	X, если НЕ следует за Y
в некоторых ситуациях нам может нужно захватить и то, что в проверке. Для этого нужно обернуть это в дополнительные скобки.

let str24 = "1 индейка стоит 30€";    // В следующем примере знак валюты (€|kr) будет включён в результат вместе с суммой:
let regexp17 = /\d+(?=(€|kr))/;       // добавлены дополнительные скобки вокруг €|kr
console.log( str.match(regexp) );   // 30, €

Флаг y заставляет regexp.exec искать ровно на позиции lastIndex, ни до и ни после.
