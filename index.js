const monthEl = document.querySelector(".month h1");
const daysEl = document.querySelector(".days");

let currentDate = new Date();

function updateCalendar() {
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthEl.innerText = months[monthIndex];

  let days = "";
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days += `<div class="empty"></div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const calendarDate = new Date(year, monthIndex, i);
    const dayIndex = (firstDay + i - 1) % 7; // Calculate the day index based on the offset

    if (calendarDate.getDate() === currentDate.getDate() && calendarDate.getMonth() === currentDate.getMonth() && calendarDate.getFullYear() === currentDate.getFullYear()) {
      days += `<div class="today">${i}</div>`;
    } else if (dayIndex === 5 || dayIndex === 6) { // Check if it's a weekend day
      days += `<div class="weekend">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  daysEl.innerHTML = days;
}

updateCalendar();

const prevMonthBtn = document.querySelector(".month .fa-chevron-left");
const nextMonthBtn = document.querySelector(".month .fa-chevron-right");

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});
