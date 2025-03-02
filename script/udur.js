function updateTimer() {
    // Past date in Mongolia Time Zone (UTC+8)
    const past = new Date("2021-12-01T12:00:00+08:00");
  
    // Current time in UTC
    const now = new Date();
  
    // Convert current time to Mongolia Time Zone (UTC+8)
    const utcOffset = 8 * 60 * 60 * 1000; // Offset in milliseconds
    const mongolianNow = new Date(now.getTime() + (utcOffset - now.getTimezoneOffset() * 60 * 1000));
  
    // Calculate the exact difference
    let years = mongolianNow.getFullYear() - past.getFullYear();
    let months = mongolianNow.getMonth() - past.getMonth();
    let days = mongolianNow.getDate() - past.getDate();
    let hours = mongolianNow.getHours() - past.getHours();
    let minutes = mongolianNow.getMinutes() - past.getMinutes();
    let seconds = mongolianNow.getSeconds() - past.getSeconds();
  
    // Adjust for negative values
    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      // Handle different month lengths
      const previousMonth = new Date(mongolianNow.getFullYear(), mongolianNow.getMonth(), 0);
      days += previousMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 13;
      years -= 1;
    }
  
    // Update the HTML
    document.getElementById("timer").innerHTML =
      `<div><span>Око гэдэг жаалын найз залуу болоод ийм хугцааг өнгрөөж явндаа.</span></div><br>` +
      `<div>${years}<span>Жил</span></div>` +
      `<div>${months}<span>Сар</span></div>` +
      `<div>${days}<span>Өдөр</span></div>` +
      `<div>${hours}<span>Цаг</span></div>` +
      `<div>${minutes}<span>Минут</span></div>` +
      `<div>${seconds}<span>Секунд</span></div>`;
  }
  
  // Update every second
  setInterval(updateTimer, 1000);
  


  Vue.component('heart-btn', {
  data: function () {
    return {
      liked: false
    }
  },
  template: `<button :class="['heart-btn', {liked: this.liked}]" @click="heartit">
  <svg class="heart heart-icon" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
  </svg> 
</button>`,
  methods: {
    heartit: function (e) {
      const hearts = document.createElement('div');
      hearts.innerHTML = '<svg class="heart heart-pop one" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop two" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop three" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop four" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop five" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop six" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop seven" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop eight" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg><svg class="heart heart-pop nine" viewBox="0 0 32 29.6"><path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg>';
      e.target.appendChild(hearts);
      this.liked = !this.liked;
      setTimeout(function(){
        e.target.removeChild(hearts);
      }, 3000);
    }
  },
 mounted(){
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });
  document.body.addEventListener('keydown', function() {
    document.body.classList.remove('using-mouse');
  });
 }
})

var app = new Vue({
  el: '#app'
})


