let textArray = ["abc", "def", "ghi", "jkl"];

function one(arr) {
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
  }
}
one(textArray)
/*
? 함수 one()
* length(길이값이 존재하는 타입) 문자열과 배열을 검사하는 if() 조건문을 설치
* 배열의 갯수만큼 반복해서 콘솔을 실행해주는 간단한 함수
* 매번 같은 실행의 반복문을 사용해야 하는 경우, 간단하게 호출을 통해 사용
*/

const two = function(arr){
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
  }
}
two(textArray)
/*
? 변수 two
* 위 one 함수와 알고리즘이 동일하다. 다만 차이점은
* 함수에 '이름'이 없다. 익명함수이다.
* 변수 two가 이름이 없는 함수를 '식별'해주어 이름의 역할을 대신 
*/