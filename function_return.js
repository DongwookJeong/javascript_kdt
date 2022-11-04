function minus(a, b){
  if(typeof(a)==="number"&&typeof(b)==="number"){
    // ? 매개변수 a와 b가 모두 number 타입이어야'만'함수가 실행되도록 조건을 설치
    // ? typeof()연산자는 내장함수이므로, 사전에 리턴이 정해져 있고, '문자열'데이터 타입으로 리턴
    if(a>b){
      // ? 음수가 나오지 않도록 조건 설치
      return a-b;
    } else {
      console.error("첫번째 인자가 두번째 인수보다 작습니다.");
      // ? 정식 예외처리(exception)는 아니지만, 간단한 분기처리로 의도하지 않은 데이터타입을 사전에 차단
    }
  }
}

function sum(firstNumber, secondNumber){
  if(typeof(firstNumber)==="number" && typeof (secondNumber)==="number"){
    // ? 함수 sum()은 위 minus와 동일하게 조건문을 설치해 타입을 제한했습니다.
    // ? && 좌항(왼쪽 조건), 우항(오른쪽 조건) 모두가 '참(true)'이어야'만' true를 
    // ? 리턴하는 너그럽지 않은 까다로운 and 연산자, 논리곱 연산을 사용
    // ? 덧셈으로 '연산'하는 것이 목적이기 때문에, 다른 데이터타입이 들어오면 곤란할 것
    return firstNumber + secondNumber
  }
}
console.log(sum(10, minus(20, 5)))
// ? sum()함수는 까다로운 조건으로 두개의 매개변수(parameter)를 다룸에도 불구하고,
// ? 바로 윗 행의 조회는 의아한 작성으로 보이기 쉽다.
// ? 리턴, 즉 반환이 어떻게 되는가에 따라 결국에는 함수가 아닌 다른 데이터타입으로 처리되기
// ? 때문에 minus() 함수는 결과적으로 호출(call)이 '되기만' 한다면 데이터타입 number로
// ? 변한다고 판단

// ? 함수가 가진 다양한 변화 중 '값'을 내오고, 그 값을 다른 함수에 사용하는 일련의 개발 작업은
// ? 반복적인 작업을 줄일 수 있는 막강한 성능을 만들어 내기 때문에,
// ? 다양한 패턴(코딩방식)을 탐색하는 것이 실력 상승에 매우 큰 도움