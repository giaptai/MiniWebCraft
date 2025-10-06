let curr_time = new Date();
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

setInterval(() => {
    curr_time = new Date();
    let dd = curr_time.getDate();
    let hh = curr_time.getHours();
    let mm = curr_time.getMinutes();
    let ss = curr_time.getSeconds();
    seconds.classList.add('flash');
    setTimeout(() => seconds.classList.remove('flash'), 200);
    days.getElementsByTagName('span')[0].textContent = formatTime(dd) ? '0' + dd : dd;
    hours.getElementsByTagName('span')[0].textContent = formatTime(hh) < 10 ? '0' + hh : hh;
    minutes.getElementsByTagName('span')[0].textContent = formatTime(mm) < 10 ? '0' + mm : mm;
    seconds.getElementsByTagName('span')[0].textContent = formatTime(ss) < 10 ? '0' + ss : ss;
}, 1000);





function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}
