export function getGreeting() {
  // based on device date, get hours
  const currentHour = new Date().getHours();
  // default greeting
  let timeGreeting = "Good Evening!";

  // return different greeting between specified times e.g. 5am and 11:59am
  if (currentHour >= 5 && currentHour < 12) {
    timeGreeting = "Good Morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeGreeting = "Good Afternoon!";
  }

  return timeGreeting;
}
