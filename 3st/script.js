const 떡립 = [
  { name: "짱구", age: 19, gender: "남자" },
  { name: "철수", age: 20, gender: "남자" },
  { name: "유리", age: 21, gender: "여자" },
];
// console.log(떡립);
const 떡립방법대Container = document.querySelector(".떡립방법대Container");

떡립.forEach((떡립) => {
  let html = `<hr>
            <h3 class="name">이름 : ${떡립.name}</h3>
            <hr>
            <h5 class="age">나이 : ${떡립.age}</h5>
            <hr>
            <h5 class="gender">성별 : ${떡립.gender}</h5>`;
  떡립방법대Container.insertAdjacentHTML("beforeend", html);
});

// const 떡립여자 = 떡립.find((woman) => {
//   return woman.gender === "여자";
// });
// console.log(떡립여자);

// const 떡립남자 = 떡립.filter((man) => {
//   return man.gender === "남자";
// });
// console.log(떡립남자);

// const 나이추가 = 떡립.map((나이추가스) => {
//   return 나이추가스.age + 10;
// });
// console.log(나이추가);

// const 내림차순나이 = 떡립.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(내림차순나이);

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log(user.주소);
