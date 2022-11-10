// let a = 10;
// let b = 4;
// function dongwook(a, b, callback) {
//   let c = a + b;
//   callback(22);
//   return c;
// }

// console.log(
//   dongwook(2, 7, (d) => {
//     console.log(d);
//   })
// );

// f()안의 매개변수가 f()
// f(f())

// let a = 10
// let b = 4
function dongwook(a , b , callback){
    let c = a + b
    return callback(c)
}
let e = dongwook(2, 7, (d)=>{
    return d // 뭐가 나올지 예측해보십쇼
})

function dongdong(){
  return 1 + 2
}

let f = dongdong()

console.log(e)

let g = [1,2,3,4,5,6] 
let h = g.map(function zzang(item){item -1})

// f() 가 변수에도 담기고
// 매개변수에 함수가 담기고
// 일급 객체라고 부르기로 했어요

