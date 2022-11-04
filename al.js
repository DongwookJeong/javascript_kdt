const indexList = (function numberSet() {
  let tempArray = [];
  for (let i = 0; i < 19; i++) {
    tempArray.push(i + 1);
  }
  return tempArray;
})();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function afterRandom(arr) {
  let reOrderArray = [];
  let targetArr = arr.map((e) => e);
  while (reOrderArray.length < arr.length) {
    let getRandomIntResult = getRandomInt(
      targetArr[0],
      targetArr[targetArr.length - 1]
    );
    if (reOrderArray.includes(getRandomIntResult) === true) {
    } else {
      reOrderArray.push(targetArr[getRandomIntResult - 1]);
      targetArr.splice(getRandomIntResult - 1, 1);
    }
  }
  let setIndex = 0;
  reOrderArray.forEach((element, index) => {
    if (element === undefined) {
      reOrderArray[index] = targetArr[setIndex];
      setIndex++;
    }
  });
  return reOrderArray;
}
let collectStatistics = {};
for (let i = 0; i < 100; i++) {
  collectStatistics[`${i + 1}회`] = afterRandom(indexList);
}
// ------------- 위는 알고리즘 ----------------------

const root = document.getElementById("root");
let ulTag = document.createElement("ul");
ulTag.id = "algorithm-test";
root.appendChild(ulTag);

let setData = Object.keys(collectStatistics);
let liBox = [];
for (let i = 0; i < Object.keys(collectStatistics).length; i++) {
  const liTag = `<li>${setData[i]}</li>`;
  liBox.push(liTag);
}
root.children[0].innerHTML = liBox.join("");
console.log(Object.keys(collectStatistics));
