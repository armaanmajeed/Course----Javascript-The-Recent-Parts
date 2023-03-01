function data() {
    return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

var {
    a: first,
    c: third,
    b: second,
    ...fouth
} = data();

console.log(first, second, third, fouth);