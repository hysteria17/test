let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

//Arrays
let arr = ["first",2,3,"four",5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
    console.log(i + ':' + item + " (массив: " + mass + ')');
});
console.log(arr);

//цикл FOR OF

let mass = [1,3,4,6,7];

for (let key of mass) {
    console.log(key);
}

