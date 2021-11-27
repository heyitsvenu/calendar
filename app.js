const monthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const monthHeading = document.getElementById('month');
const yearHeading = document.getElementById('year');
const dayBody = document.querySelector('.day-body');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

function getCurrMonth(year, month) {
  const date = new Date(year, month, 1);
  return {
    month: date.getMonth(),
    year: date.getFullYear(),
    date: date.getDate(),
    day: date.getDay() == 0 ? 6 : date.getDay() - 1,
  };
}

function getMonth(year, month) {
  const date = new Date(year, month, 1);
  return {
    month: date.getMonth(),
    year: date.getFullYear(),
    date: date.getDate(),
    day: date.getDay() == 0 ? 6 : date.getDay() - 1,
  };
}

let date = new Date();

function getPrevMonth() {
  let month = getMonth(date.getFullYear(), date.getMonth() - 1);
  date = new Date(month.year, month.month, month.date);
  return month;
}

function getNextMonth() {
  let month = getMonth(date.getFullYear(), date.getMonth() + 1);
  date = new Date(month.year, month.month, month.date);
  return month;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function getCurrMonthDays() {
  const date = new Date();
  let curr = getCurrMonth(date.getFullYear(), date.getMonth());
  console.log(date.getDate());
  let day = curr.day;
  for (let i = 0; i < day; i++) {
    dayBody.innerHTML += `<div class="day"></div>`;
  }
  let totalDays = daysInMonth(curr.month + 1, curr.year);
  for (let i = 0; i < totalDays; i++) {
    if (i == date.getDate() - 1) {
      dayBody.innerHTML += `<div class="day" style="color:red; border: 1px solid red; border-radius: 50%;">${
        i + 1
      }</div>`;
    } else {
      dayBody.innerHTML += `<div class="day">${i + 1}</div>`;
    }
  }
}

prevBtn.addEventListener('click', function () {
  dayBody.innerHTML = '';
  let prev = getPrevMonth(date.getFullYear(), date.getMonth());
  monthHeading.textContent = monthArr[prev.month];
  yearHeading.textContent = prev.year;
  let day = prev.day;
  if (
    prev.year == new Date().getFullYear() &&
    prev.month == new Date().getMonth()
  ) {
    getCurrMonthDays();
  } else {
    for (let i = 0; i < day; i++) {
      dayBody.innerHTML += `<div class="day"></div>`;
    }
    let totalDays = daysInMonth(prev.month + 1, prev.year);
    for (let i = 0; i < totalDays; i++) {
      dayBody.innerHTML += `<div class="day">${i + 1}</div>`;
    }
  }
});

nextBtn.addEventListener('click', function () {
  dayBody.innerHTML = '';
  let next = getNextMonth(date.getFullYear(), date.getMonth());
  monthHeading.textContent = monthArr[next.month];
  yearHeading.textContent = next.year;
  let day = next.day;
  if (
    next.year == new Date().getFullYear() &&
    next.month == new Date().getMonth()
  ) {
    getCurrMonthDays();
  } else {
    for (let i = 0; i < day; i++) {
      dayBody.innerHTML += `<div class="day"></div>`;
    }
    let totalDays = daysInMonth(next.month + 1, next.year);
    for (let i = 0; i < totalDays; i++) {
      dayBody.innerHTML += `<div class="day">${i + 1}</div>`;
    }
  }
});

window.addEventListener('DOMContentLoaded', function () {
  const date = new Date();
  let curr = getMonth(date.getFullYear(), date.getMonth());
  monthHeading.textContent = monthArr[curr.month];
  yearHeading.textContent = curr.year;
  getCurrMonthDays();
});
