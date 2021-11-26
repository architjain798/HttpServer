function makeArray() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  //console.log(i);
  return shooters;
}
let army = makeArray();
console.log(army);
army[0]();
army[5]();
