
// const btns = document.querySelectorAll('button'),
          //       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

            // btns[0].addEventListener('click', () => {
//   if (!btns[1].classList.contains('red')) /* проверяем у второй кнопки наличие класса red и что такого калсса нет */ {
// btns[1].classList.add('red');
//   } else {
//     btns[1].classList.remove('red');
//   }
          //   btns[1].classList.toggle('red');
          // });

// console.log(btns[0].className);

  /////////////////////////////////////////
 ////////* Делегирование событий *////////
/////////////////////////////////////////
          // wrapper.addEventListener('click', (event) =>  {
          //   if (event.target && event.target.tagName == "BUTTON") {
          //     console.log('Hello');
          //   }
          // }); // ДЕЛЕГИРОВАНИЕ

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello');
//   });
// }); ПРИМЕР ОШИБКИ!

          // const btn = document.createElement('button');
          // btn.classList.add('red');
          // wrapper.append(btn);


  ////////////////////////////////////////////////// 
 /////////* Скрипты и время их выполнения *//////// 
//////////////////////////////////////////////////

          // const btn =document.querySelector('.btn');
          // let timerId,
          //     i = 0;


          // function myAnimation() {
          //   const elem = document.querySelector('.box');
          //   let pos = 0;



          //   const id = setInterval(frame, 5);
          //   function frame() {
          //     if (pos == 300){
          //       clearInterval(id);
          //     } else {
          //       pos++;
          //       elem.style.top = pos + "px";
          //       elem.style.left = pos + "px";
          //     }
          //   }
          // }
          // btn.addEventListener('click',myAnimation);
            // const timerId = setTimeout(logger, 2000);
          //   timerId = setInterval(logger, 1000);
          // });

          



// function logger () {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('text');
//   i++;
// } 

// let id = setTimeout(function log(){
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);

  ///////////////////////////////////
 ////////* Работа с датами *////////
///////////////////////////////////

// const now = new Date('2022-04-20');
//  new Date.parse('2022-04-20');

/* Методы получения компонентов или специфических значений  */

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset()); // разница между часовым поясом и UTC
// console.log(now.getTime());


/* Методы сетеры */

// console.log(now.setHours(18, 40)); // Установка часов, минут
// console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let sum = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);

  /////////////////////////////////////////////////////////////////
 ////////* Параметры документа, окна и работа с ними *////////////
/////////////////////////////////////////////////////////////////

// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//   // box.style.height = box.scrollHeight + 'px';
//   // console.log(box.scrollTop);
  
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style.display);

// console.log(document.documentElement.scrollTop);

  ////////////////////////////////////////
 ////////* Функции конструкторы *////////
////////////////////////////////////////

//Стандарт ES5
//Функции конструкторы предназначены для создания новых однотипных объектов. 

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function() {
//   console.log(`Пользователь ${this.name} ушел`);
// };



// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// В стандарте ES6 появились классы
// Как выглядят классы 
// Классы в ES6 это синтаксический сахар (более удобная форма создания функицй-конструкторов)




// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`Hello! ${this.name}`);
//   }
//   exit(){
//     console.log(`Пользователь ${this.name} ушел`);
//   }
// }

  ////////////////////////////////////////
 ////////* Конекст вызова. This *////////
////////////////////////////////////////
'use strict';

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
  
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// };
// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = window, но если стоит use stroct = undefinerd
// 2) Контекст у методов объетка - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, applay, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   this.style.backgroundColor = 'red';
// });
btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
});

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));