let r;
let h;
// let a
let random = Math.floor(Math.random() * (99 + 1)) + 1;

// function conVolume(r, h){
// return (3.14159*r*r*h)/3
// }

function rand() {
  // function conVolume(r, h) {
  //   let rRandom = rand(r);
  // }
  // let r
  // let h
  return Math.floor(Math.random() * 100) + 1;
}
// console.log(rand(r));
// console.log(r); //몰라 못찾음
// r = rand();
// console.log(r); //랜덤값
// console.log(rand(h));

function cone_volume(radius, height) {
  console.log(radius, height)
  
  return Math.PI * radius ** 2 * height;
}

console.log(cone_volume(rand(), rand()));
// 입력값 = 77의 radius와 88의 height
// 출력값 = 그 둘을 더한 값을 반환해줘

// 입력값 = 1~100
// 출력값 = 1~100사이의 반지름과 1~100사이의 높이값으로 원뿔의 부피를 계산해줘

// console.log(cone_volume(77, 88));
// function conVolume(r, h) {
//   let a = 3.14159 * r * r * h / 3;
//   return a
// }

// let a = (3.14159 * rand(r) * rand(r) * rand(h)) / 3;
// console.log(3.14159*rand(r)*rand(r)*rand(h)/3)
// conVolume(a)