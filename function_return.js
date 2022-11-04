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
    // ? 덧셈으로 '연산'하는 것이 목적이기 때문에
  }
}