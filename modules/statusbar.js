// statusbar.js
// manage the status bar at the top of the screen

/**
 * initialize the statusbar
 */
export function setupStatusbar() {
  // initial update
  updateStatusbar();

  // set interval to update every second
  setInterval(updateStatusbar, 1000);
}

/**
 * update all statusbar elements
 */
function updateStatusbar() {
  updateTimeAndDate();
}

/**
 * update the time and date in the statusbar
 */
function updateTimeAndDate() {
  const timeElement = document.getElementById("status-time");
  const dateElement = document.getElementById("status-date");
  const now = new Date();

  // format time: HH:MM:SS
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // format date: day, DD month YYYY
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayName = days[now.getDay()];
  const day = now.getDate().toString().padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  // update the elements
  if (timeElement) timeElement.textContent = timeString;
  if (dateElement) dateElement.textContent = dateString;
}
