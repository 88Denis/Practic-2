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

const now = new Date('2022-04-20');
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

console.log(now.setHours(18, 40)); // Установка часов, минут
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let sum = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
