let intervalId;
let count = 0;

intervalId = setInterval(() => {
  count++;
  document.querySelector("#counter").textContent = count;

  if (count === 5) {
    console.log("종료");
    clearInterval(intervalId);
  }
}, 1000);
