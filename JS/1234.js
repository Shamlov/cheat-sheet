'use strict'
// -------Регулярные выражения – мощный способ поиска и замены для строк.-----------------------------------------------------------------------------------
regexp = new RegExp("шаблон", "флаги"); // Регулярное выражение regexp в обоих случаях является объектом встроенного класса RegExp
regexp = /шаблон/gmi; // слеши /.../ не допускают вставок переменных (наподобие ${...}). слеши /.../ говорят JS, что это регулярное выражение. Они, что и кавычки для обозначения строк.
i - //поиск не зависит от регистра: нет разницы между A и a
g - //поиск ищет все совпадения, без него – только первое.
m - //многострочный режим 
s - //включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
u - //включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (Символы из 4 байт воспринимаются как единое целое, а не как два символа по 2 байта.)
y - //режим поиска на конкретной позиции в тексте
d - //результат регулярного выражения помещается в массив, который содержит дополнительную информацию о регулярном выражении, например индексы начала и конца подстрок. Этот флаг не меняет поведение регулярного выражения, а лишь предоставляет дополнительную информацию.
str.match(regexp) //для строки str возвращает массив совпадения с регулярным выражением regexp.  
let matches = "JavaScript".match(/HTML/) || [];  // если совпадений нет, всегда возвращается null. чтобы результатом всегда был массив, написать так:
str.replace(regexp, replacement) // заменяет совпадения с regexp в строке str на replacement (все, если есть флаг g, иначе только первое) alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will
    // $&	вставляет всё найденное совпадение   alert( "Люблю HTML".replace(/HTML/, "$& и JavaScript") ); // Люблю HTML и JavaScript
    // $`	вставляет часть строки до совпадения
    // $'	вставляет часть строки после совпадения
    // $n	если n это 1-2 значное число, вставляет содержимое n-й скобочной группы регулярного выражения, больше об этом в главе Скобочные группы
    // $<name>	вставляет содержимое скобочной группы с именем name, также изучим в главе Скобочные группы
    // $$	вставляет символ "$"
regexp.test(str) // проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false.
Символьный класс – это специальное обозначение, которое соответствует любому символу из определённого набора.
str.replace(/\D/g, ""); // 79031234567    найти нецифровые символы \D и удалить их из строки
    \d – цифры.  символ от 0 до 9.
    \D – не цифры.
    \s – пробельные символы, табы, новые строки.
    \S – все, кроме \s.
    \w – латиница, цифры, подчёркивание '_'.
    \W – все, кроме \w.  русские буквы принадлежат этому классу.
    . – любой символ, если с флагом s, в противном случае любой символ, кроме перевода строки \n. Точка означает «любой символ», но не «отсутствие символа»
Регулярное выражение может содержать как обычные символы, так и символьные классы.  let regexp = /CSS\d/
\p{…}  ищет символ с заданным свойством. обязательно использовать флаг u.   alert( str.match(/\p{L}/gu) ); // A,ბ,ㄱ  найдены английская, грузинская и корейская буквы:
Буквы L:   // в нижнем регистре Ll,  модификаторы Lm,  заглавные буквы Lt, в верхнем регистре Lu,  прочие Lo.
Числа N:   // десятичная цифра Nd,   цифры обозначаемые буквами (римские) Nl,  прочие No.
Знаки пунктуации P:    // соединители Pc,  тире Pd, открывающие кавычки Pi, закрывающие кавычки Pf, открывающие скобки Ps,  закрывающие скобки Pe,  прочее Po.
Отметки M (например, акценты):  // двоеточия Mc,  вложения Me,  апострофы Mn.
Символы S:      // валюты Sc,  модификаторы Sk,  математические Sm,  прочие So.
Разделители Z:  // линия Zl,  параграф Zp,  пробел Zs.
Прочие C:       // контрольные Cc,  форматирование Cf,  не назначенные Cn,  для приватного использования Co,  суррогаты Cs.
^ каретка, означает совпадение с началом текста.  let str1 = "Mary had a little lamb";  alert( /^Mary/.test(str1) ); // true
$ доллор - означает совпадение с концом текста.  let str1 = "it's fleece was white as snow";  alert( /snow$/.test(str1) ); // true
^...$   используются для проверки, совпадает ли СТРОКА полностью с шаблоном полностью.

Многострочный режим якорей ^ $, флаг "m"