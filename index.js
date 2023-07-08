const monthEl = document.querySelector(".month h1");
const daysEl = document.querySelector(".days");

let currentDate = new Date();

function updateCalendar() {
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
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
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days += `<div class="empty"></div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const today = new Date().toDateString();
    const calendarDate = new Date(year, monthIndex, i).toDateString();

    if (calendarDate === today) {
      days += `<div class="today">${i}</div>`;
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
