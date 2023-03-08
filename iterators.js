var str = "Armaan";
var itr = str[Symbol.iterator]();

for (let i = 0; i < str.length; i++) {
    console.log(itr.next().value);
}