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

          const btn =document.querySelector('.btn');
          let timerId,
              i = 0;


          function myAnimation() {
            const elem = document.querySelector('.box');
            let pos = 0;



            const id = setInterval(frame, 5);
            function frame() {
              if (pos == 300){
                clearInterval(id);
              } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
              }
            }
          }
          btn.addEventListener('click',myAnimation);
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