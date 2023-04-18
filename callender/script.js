 
const calendar = document.getElementById('calendar');
const ds = document.getElementById('weekdays');
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
const weekdays =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthslong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const monthSmall = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function load(event){
    event.preventDefault();
    calendar.style.display="flex"
    ds.style.display='flex'
  const yearstr = document.getElementById('year').value;
  const monthstr = document.getElementById('months').value;
  const dt = new Date(yearstr, (monthstr.length>3)? monthslong.indexOf(monthstr):monthSmall.indexOf(monthstr), 10);
  const day = dt.getDay();
  const month = dt.getMonth();
  const namee = document.getElementById('month');
  namee.innerHTML = `${dt.toLocaleString('default',{month : 'long', year: 'numeric'})}`
  const year = dt.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dateString = firstDayOfMonth.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++){
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');
    if(i > paddingDays){
      daySquare.innerText = i - paddingDays;
    } else {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);
  }
  console.log(dt);
}

// load();
