const fon = document.querySelector('.fon_js');
const calendarMonthInnerAll = document.querySelectorAll('.calendar__month-inner_js');

document.addEventListener('click', (e) =>{
  if (e.target.closest('.fon_js')){
    fon.classList.toggle('_active');
    calendarMonthInnerAll.forEach((item) =>{
      item.classList.remove('_active');
      item.style.cssText = '';
    })
  }
  if (e.target.closest('.calendar__month-inner_js')){
    const calendarMonthInner = e.target.closest('.calendar__month-inner_js');
    fon.classList.add('_active');
    calendarMonthInner.classList.add("_active");
  }
});