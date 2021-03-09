import './styles.css';

// const currentTime = Date.now();
// const time = currentTime - targetTime;

// Плагин это класс CountdownTimer, экземпляр которого
// создает новый таймер с настройками.

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  
    this.intervalId = setInterval(() => {
        const currentTime = Date.now();
      const time = this.targetDate-currentTime;
      // console.log(time);
       if(time <= 0) {
         clearInterval(this.intervalId);
          document.getElementById("timer-1").innerHTML = "Акция истекла";
         return
    }
      this.getTimeComponents(time);
    }, 1000);
  }
       pad(value) {
      return String(value).padStart(2, '0')
    }
    getTimeComponents(time){
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.refs.days.textContent = `${days} `;
      this.refs.hours.textContent = `${hours} `;
      this.refs.mins.textContent = `${mins} `;
      this.refs.secs.textContent = `${secs} `;
    }


  }

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Apr 17, 2020'),
// });

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Apr 17, 2021'),
});


// Для подсчета значений используй следующие готовые формулы,
//   где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);






