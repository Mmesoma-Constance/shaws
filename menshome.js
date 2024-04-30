const profileBtn = document.getElementById("profileBtn");
const profileDiv = document.getElementById("profile");

profileBtn.addEventListener("click", (e) => {
  profileDiv.classList.toggle("visible");
  profileDiv.classList.toggle("hidden");
});

const sideNavBtn = document.getElementById("sideNavBtn");
const sideNavDiv = document.getElementById("sideNav");

sideNavBtn.addEventListener("click", (e) => {
  sideNavDiv.style.width = "250px";
  sideNavDiv.classList.toggle("hiddenNav");
});

let username = localStorage.getItem("username");
let myUsername = document.getElementById("myUsername");

myUsername.textContent = `${
  username.charAt(0).toUpperCase() + username.slice(1)
}`;

let password = localStorage.getItem("mypassword");

let myName = document.getElementById("myName");
let myPassword = document.getElementById("myPassword");

myName.textContent = `${username.charAt(0).toUpperCase() + username.slice(1)}`;

myPassword.textContent = `${
  password.charAt(0).toUpperCase() + password.slice(1)
}`;

let presentTime = new Date();
let presentHour = presentTime.getHours();
let presentMinutes = presentTime.getMinutes();
let presentSeconds = presentTime.getSeconds();

let greeting = document.getElementById("greeting");

if (presentHour < 12) {
  greeting.textContent = "Good Morning";
} else if (presentHour >= 12 && presentHour < 16) {
  greeting.textContent = "Good Afternoon";
} else if (presentHour >= 16) {
  greeting.textContent = "Good Evening";
}

if (presentHour >= 19 || presentHour < 7) {
  document.body.style.background = "black";
  document.body.style.color = "white";
} else {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

console.log(presentHour);

// prediction calculation & calender

function calculateNextCycle() {
  const calendarContainer = document.getElementById("calendar");
  const monthContainer = document.getElementById("month");
  const daysContainer = document.getElementById("days");
  const remainingDays = document.getElementById("remainigDays");

  const urlParams = new URLSearchParams(window.location.search);
  const lastDate = new Date(urlParams.get("lastDate"));
  const cycleLength = parseInt(urlParams.get("cycleLength"));
  const duration = parseInt(urlParams.get("duration"));

  const lastCycleEndDate = new Date(
    lastDate.getTime() + duration * 24 * 60 * 60 * 1000
  );
  const nextCycleStartDate = new Date(
    lastCycleEndDate.getTime() + (cycleLength - 1) * 24 * 60 * 60 * 1000
  );

  // display calender

  const dayOfWeek = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
}

calculateNextCycle();
