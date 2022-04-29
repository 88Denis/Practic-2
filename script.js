// // const btns = document.querySelectorAll('button'),
//           //       wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(1));
// // console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));

// // if (btns[1].classList.contains('red')) {
// //     console.log('red');
// // }

//             // btns[0].addEventListener('click', () => {
// //   if (!btns[1].classList.contains('red')) /* проверяем у второй кнопки наличие класса red и что такого калсса нет */ {
// // btns[1].classList.add('red');
// //   } else {
// //     btns[1].classList.remove('red');
// //   }
//           //   btns[1].classList.toggle('red');
//           // });

// // console.log(btns[0].className);

//   /////////////////////////////////////////
//  ////////* Делегирование событий *////////
// /////////////////////////////////////////
//           // wrapper.addEventListener('click', (event) =>  {
//           //   if (event.target && event.target.tagName == "BUTTON") {
//           //     console.log('Hello');
//           //   }
//           // }); // ДЕЛЕГИРОВАНИЕ

// // btns.forEach(btn => {
// //   btn.addEventListener('click', () => {
// //     console.log('Hello');
// //   });
// // }); ПРИМЕР ОШИБКИ!

//           // const btn = document.createElement('button');
//           // btn.classList.add('red');
//           // wrapper.append(btn);


//   ////////////////////////////////////////////////// 
//  /////////* Скрипты и время их выполнения *//////// 
// //////////////////////////////////////////////////

//           // const btn =document.querySelector('.btn');
//           // let timerId,
//           //     i = 0;


//           // function myAnimation() {
//           //   const elem = document.querySelector('.box');
//           //   let pos = 0;



//           //   const id = setInterval(frame, 5);
//           //   function frame() {
//           //     if (pos == 300){
//           //       clearInterval(id);
//           //     } else {
//           //       pos++;
//           //       elem.style.top = pos + "px";
//           //       elem.style.left = pos + "px";
//           //     }
//           //   }
//           // }
//           // btn.addEventListener('click',myAnimation);
//             // const timerId = setTimeout(logger, 2000);
//           //   timerId = setInterval(logger, 1000);
//           // });





// // function logger () {
// //   if (i === 3) {
// //     clearInterval(timerId);
// //   }
// //   console.log('text');
// //   i++;
// // } 

// // let id = setTimeout(function log(){
// //   console.log('Hello');
// //   id = setTimeout(log, 500);
// // }, 500);

//   ///////////////////////////////////
//  ////////* Работа с датами *////////
// ///////////////////////////////////

// // const now = new Date('2022-04-20');
// //  new Date.parse('2022-04-20');

// /* Методы получения компонентов или специфических значений  *///////////////////// 

// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());

// // console.log(now.getMinutes());
// // console.log(now.getSeconds());
// // console.log(now.getMilliseconds());
// // console.log(now.getDay());

// // console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC
// // console.log(now.getTime());


// /* Методы сетеры */

// // console.log(now.setHours(18, 40)); // Установка часов, минут
// // console.log(now);

// // let start = new Date();

// // for (let i = 0; i < 100000; i++) {
// //   let sum = i ** 3;
// // }

// // let end = new Date();

// // alert(`Цикл отработал за ${end - start} миллисекунд`);

//   /////////////////////////////////////////////////////////////////
//  ////////* Параметры документа, окна и работа с ними *////////////
// /////////////////////////////////////////////////////////////////

// // const box = document.querySelector('.box'),
// //       btn = document.querySelector('button');

// // const width = box.clientWidth;
// // const height = box.clientHeight;
// // const width = box.offsetWidth;
// // const height = box.offsetHeight;
// // const width = box.scrollWidth;
// // const height = box.scrollHeight;

// // console.log(width, height);

// // btn.addEventListener('click', () => {
// //   // box.style.height = box.scrollHeight + 'px';
// //   // console.log(box.scrollTop);

// // });

// // console.log(box.getBoundingClientRect().top);

// // const style = window.getComputedStyle(box);
// // console.log(style.display);

// // console.log(document.documentElement.scrollTop);

//   ////////////////////////////////////////
//  ////////* Функции конструкторы *////////
// ////////////////////////////////////////

// /* Стандарт ES5 *//////////////////// 
// //Функции конструкторы предназначены для создания новых однотипных объектов. 

// // function User(name, id) {
// //   this.name = name;
// //   this.id = id;
// //   this.human = true;
// //   this.hello = function() {
// //     console.log(`Hello ${this.name}`);
// //   };
// // }

// // User.prototype.exit = function() {
// //   console.log(`Пользователь ${this.name} ушел`);
// // };



// // const ivan = new User('Ivan', 28);
// // const alex = new User('Alex', 20);

// // ivan.exit();

// // ivan.hello();
// // alex.hello();

// // console.log(ivan);
// // console.log(alex);

// // В стандарте ES6 появились классы
// // Как выглядят классы 
// // Классы в ES6 это синтаксический сахар (более удобная форма создания функицй-конструкторов)




// // class User {
// //   constructor(name, id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// //   }
// //   hello() {
// //     console.log(`Hello! ${this.name}`);
// //   }
// //   exit(){
// //     console.log(`Пользователь ${this.name} ушел`);
// //   }
// // }

//   ////////////////////////////////////////
//  ////////* Конекст вызова. This *////////
// ////////////////////////////////////////
// 'use strict';

// // function showThis(a, b) {
// //   console.log(this);
// //   function sum() {
// //     console.log(this);
// //     return a + b;
// //   }
// //   console.log(sum());

// // }
// // showThis(4, 5);

// // const obj = {
// //   a: 20,
// //   b: 15,
// //   sum: function() {
// //     console.log(this);
// //   }
// // };
// // obj.sum();

// // function User(name, id) {
// //   this.name = name;
// //   this.id = id;
// //   this.human = true;
// // }

// // let ivan = new User('Ivan', 23);

// // function sayName(surname) {
// //   console.log(this);
// //   console.log(this.name + surname);
// // }

// // const user = {
// //   name: 'John'
// // };

// // sayName.call(user, 'Smith');
// // sayName.apply(user, ['Smith']);

// // function count(num) {
// //   return this*num;
// // }

// // const double = count.bind(2);
// // console.log(double(3));
// // console.log(double(13));


// // 1) Обычная функция: this = window, но если стоит use stroct = undefinerd
// // 2) Контекст у методов объетка - сам объект
// // 3) this в конструкторах и классах - это новый экземпляр объекта
// // 4) Ручная привязка this: call, applay, bind

// const btn = document.querySelector('button');

// // btn.addEventListener('click', function() {
// //   this.style.backgroundColor = 'red';
// // });
// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'red';
// });

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this);
//     };
//     say();
//   }
// };

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4));


//////////////////////////////
////////* Классы ES6 *////////
//////////////////////////////
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width); // Вызывает супер-конструктор родителя, всегда ставиться на первом месте
//     this.text = text;
//     this.bgColor = bgColor;
//   }
//   showMyProps() {
//     console.log(`Текст: ${this.text},\nцвет: ${this.bgColor}`);
//   }
// }
// /*Концепция, шаблон */

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const squre = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(squre.calcArea());
// console.log(long.calcArea());


  ///////////////////////////////
 ////////* Промисы ES6 *////////
///////////////////////////////

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'TV',
//       price: 2000
//     };

//     resolve(product);
//   }, 2000);
// });


// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });

// }).then(data => {
//   data.modify = true;
//   return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
// console.log('Finally');
// });

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log('1000'));
// // test(2000).then(() => console.log('2000'));


// /*Промис all ожидает выполнение всех промисов*/
// Promise.all([test(1000), test(1000)]).then(() => {
//   console.log('All');
// });
// /*Промис race выполняет свои действия только тогда когда первый промис правильно отработал*/
// Promise.race([test(1000), test(1000)]).then(() => {
//   console.log('All');
// });


  ////////////////////////////////////////////
 ////////* Методы перебора массивов *////////
////////////////////////////////////////////

/* filter *//////////////////// 

// const names = ['Ivan', 'Nikolay', 'Dmitry', 'Marina',];

// const shortName = names.filter(function(name) {
//   return name.length < 5;
// });
//   console.log(shortName);

/* map *//////////////////// 
//  map - возвращает новый массив с модифицированными элементами обрабатываемого массива

// let answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

/* every/some *//////////////////// 

// every - возвращает true если ВСЕ элементы подходят по условию
// some возвращает true если хотя-бы ОДИН элемент подходит по условию

// const some = [4, 'qwq', 'qwerty'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

/* reduce *//////////////////// 
// reduce - собирает массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];
//                           // 0     4
//                           // 4     5
//                           // 9     1
//                           // 10    3
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


  ////////////////////////////////////////////
 ////////* Работа с localStorage *///////////
////////////////////////////////////////////

// setItem - создает объект (ключт/значение)
// getItem - получает данные из localStorage
// removeItem - удаляет элемент из localStorage
// clear - чистит все локальное хранилище


// localStorage.setItem('number', 5);

//  localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
//       change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//   checkbox.checked = true;
// }
// if (localStorage.getItem('bg') === 'changed'){
  
//   form.style.backgroundColor = '#red';
// }

// checkbox.addEventListener('change', () => {
//   localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
//   if (localStorage.getItem('bg') === 'changed'){
//     localStorage.removeItem('bg');
//     form.style.backgroundColor = '#fff';
//   } else {
//     localStorage.setItem('bg', 'changed');
//     form.style.backgroundColor = 'red';
//   }
// });

// const persone = {
//   name: 'Alex',
//   age: 25
// };

// const serializefPersone = JSON.stringify(persone);
// localStorage.setItem('alex', serializefPersone);

// console.log(JSON.parse(localStorage.getItem('alex')));


  ////////////////////////////////////////////
 ////////* Регулярные выражения*/////////////
////////////////////////////////////////////

/* Методы *////////////////////

// search - возвращает позицию первого совпадения с (reg)
/*-------------------------------------------------------------------- */
// match - ищет совпадение я с (reg) в строке. Если у регулярного вы-   /
// ражения есть  флаг g, то он возвращает массив всех совпадений, без   /
// скобочных групп и деталей                                            /
/*-------------------------------------------------------------------- */
// matchAll - новый улучшенный метод варианта match                     /
// у него есть 3 отличия:                                               /
// 1. Он возвращает не массив, а перебираемый объект с рузультатами,    /
// обычный массив можно сделать при помощи Array.from                   /
// 2. Каждое совпадение возвращается в виде массива со скобочными       /
// группами (как str.match без флага g)                                 /
// 3. Если совпадений нет, то возвращается не null, а пустой перебира-  /
// емый объект                                                          /
/*-------------------------------------------------------------------- */
// replace - позволяет брать определенную часть строки и заменять ее    /
// на другое выражение                                                  /
/*-------------------------------------------------------------------- */
// test - ищет совпадение и возвращает true/false, в зависимости от
//  того, находит ли он его
/*-------------------------------------------------------------------- */


/* Флаги *////////////////////

// i - хотим что-то найти вне зависимости от региста
// g (global) - когда пытаемся найти несколько вхождений
// m - включает в себя многострочный режим

/* Классы *////////////////////

// \d (digit) - ищем цифры
// \w (word) - ищем слова
// \s (space) - ищем пробелы

/* Обратные классы *////////////////////

// \D - ищем не цифры
// \W - ищем не слова
// \S - ищем не пробелы

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// console.log(ans.search(reg));
// 

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('23-34-56'.replace(/-/g, ':'));

