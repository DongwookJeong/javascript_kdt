let pokemonList = [];
/*
! 프로그래밍의 특성 vs 자바스크립트만의 특성
! 선언이 되어있지않은 상태, 예시
? for()와 같은 '작성법(syntax)'은 고유한 것이지만, '반복문'은 프로그래밍 전체를 관통하는 개념입니다.
*/
for (let i = 0; i < pokemonList.length; i++) {
  if (studentList[i] === "가나다") {
    console.log(i + 1 + "번째에 있습니다.");
    studentList[i] = "심각한 상태";
  } else {
    console.log("이 데이터에는 가나다가 없습니다.");
  }
}
console.log(studentList);
