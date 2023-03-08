function* main() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

var it = main();

it.next();
it.next();
it.next();
it.next();

console.log([...main()]);