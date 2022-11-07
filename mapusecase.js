const nameArray = ["가나다", "라마바", "사아자", "차카타", "파하"];
const tagMake = (tagName, textNode) => `<${tagName}>${textNode}</${tagName}>`;
const ulWrap = tagMake(
  "ul",
  nameArray.map((value) => tagMake("li", value)).join("")
);
console.log(ulWrap);
