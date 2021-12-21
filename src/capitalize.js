const string = "test test test";
function capitalize(string) {
  str = string.split(" ");
  console.log(str);
  newStr = str.map((item) => {
    let firstSym = item[0].toUpperCase();
    return firstSym + item.slice(1);
  });
  return newStr.join(" ");
}
let result = capitalize(string);
console.log(result);

module.exports = capitalize;
