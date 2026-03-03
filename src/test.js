var users = [
  ["Bobby", "87"],
  ["Charles", "100"],
  ["Eric", "65"],
  ["Charles", "22"],
  ["Charles", "37"],
  ["Eric", "49"],
];
var newArr = {};
let filter = (arr) => {
  arr.forEach((user) => {
    let key = user[0];
    let val = user[1];
    if (newArr[key]) {
      newArr[key].push(val);
    } else {
      newArr = { ...newArr, [key]: [val] };
    }
  });
  console.log(newArr);
};
filter(users);
