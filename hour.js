/*
시급 계산기
시급 10,000원
*/


function one(hour){
  pay = 10000;
  addPay = hour-8
  if(hour>8){
    return hour*pay+addPay*15000
  }else{
    return hour*pay
  }
}
function tax(hour){
  return one(hour)*0.967
}
console.log(`세전 금액 ${one(9)}`)
console.log(`세후 금액 ${tax(9)}`)

