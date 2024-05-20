let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function (event) {
    event.target.classList.add("clicked");
  });
}

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);
