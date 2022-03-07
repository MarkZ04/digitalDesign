function getDayInfo(str) {

  const dateArr = str.split('.').map(el => +el);

  let date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

  const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const weekDay = weekDays[date.getDay()];
  const month = months[date.getMonth()];
  const dayMonth = date.getDate();
  const year = date.getFullYear();

  if (dayMonth < 8) return `${weekDay}, 1 неделя ${month} ${year} года`;
  if (dayMonth > 7 && dayMonth < 15) return `${weekDay}, 2 неделя ${month} ${year} года`;
  if (dayMonth > 14 && dayMonth < 22) return `${weekDay}, 3 неделя ${month} ${year} года`;
  if (dayMonth > 21 && dayMonth < 29) return `${weekDay}, 4 неделя ${month} ${year} года`;
  if (dayMonth > 28) return `${weekDay}, 5 неделя ${month} ${year} года`;
}
