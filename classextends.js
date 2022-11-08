// ? 부모 class id, name, city 라는 속성을 만들 준비가 되었다.
class ParentObject {
  constructor(id, name, city){
    this.id = id
    this.name = name
    this.city = city
  }
}
let parentObjectInstance = new ParentObject("1", "이상해씨", "대전")
console.log(parentObjectInstance)
// 부모 클래스의 기능을 그대로 전수(?) 받은 자식 class. type이라는 속성을 추가하여
// 부모 클래스와 다른 인스턴스를 생성할 수 있다.
class ChildObject extends ParentObject{
  constructor(type){
    // ! 부모 때문에 type 매개변수는 index 3번째가 된다.
    super()
    // ! 부모의 contructor()데이터를 가져오는 특수한 함수다.
    this.type = type
  }
}
let childObjectInstance = new ChildObject("풀")
console.log(childObjectInstance)