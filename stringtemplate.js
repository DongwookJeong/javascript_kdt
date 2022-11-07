let a = "나는";
let b = "날개";
let c = "달린";
let d = "호랑이";
let e = "다";
console.log('당신은 방금'+ a + '' + b + c + '' + d + e + '말씀 하였습니다. 정말' + d + '가 맞습니까?')
/*
? 위의 console.log()로 로깅한 것을 확인하면,
* 문자열(string)타입의 덧셈 기호가 앞 뒤 결합이라는 점을 활용해 문장을 연결한 사례를 확인 할 수 있다.
* 하지만, 위와 같이 변수가 많고, 또 '하나의 문장으로 만들기에' 너무 많은 덧셈을 활용하고 있어
* 가독성이 떨어진다.
* 심지어 띄어쓰기도 지원하지 않기 때문에, 중간에 띄어써옪은 빈칸 문자열도 활용한 것을
* 확인 할 수 있다.
* 가독성이 매우 떨어지는 문제를 자바스크립트 최신버전에서는 아래와 같은 방식으로 해결
*/
console.log(`당신은 방금 ${a} ${b}${c} ${d}${e} 말씀 하였습니다. 정말 ${d}가 맞습니까?`)
/*
? `` 백틱 홑따옴표, 쌍따옴표로 문자열 사이에 덧셈 기호 필요없이 한번에 문자열을 합칠 수 있다.
* ``은 변수를 중간에 결함하는 형식으로 사용할 것이라는 '암묵적인 합의'가 존재
* 백틱기호와 ${}변수 삽입하는 방식을 '탬플릿 문자열'방식이라고 부른다.
*/