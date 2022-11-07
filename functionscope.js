function outer (){
  var whatScope = ["가나다", "라마바", "사아자", "차카타"]
  for(let i = 0; i < whatScope.length; i++){
    let result = whatScope[i]
    // let 블럭스코프, for() {} 중괄호에서만 존재하는 생명주기를 가지고 있다.
    // 렉시컬 스코프라고도 한다.
    var varsult = whatScope[i]
    // 하지만 var는 함수스코프를 따르기 때문에
    // 같은 지역변수이지만, outer(){}중괄호까지 생명주기를 가지고 있다.
    // 함수 기준으로 영역이 구분된다.
    // 중괄호가 많은 자바스크립트에서, 특히 코드가 길어지는 작업에서 치명적인 단점이 된다.
    console.log(result)
  }
  console.log("var : " + varsult)
  console.log("let : " + result)
}
outer()
// ! 1. 되도록 const를 쓴다.
// ! 2. const를 못쓰는 상황에 직면했다면 let을 사용한다.
// ! var는 쓰지 않는다.