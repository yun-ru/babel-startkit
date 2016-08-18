import myModule from './myModule';

myModule.sayhi();
myModule.sayhi();
myModule.sayhi();

function *go(x){
    const a = yield x+2
}

console.log(go(10).next().value);


function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11 <-- anotherGenerator
console.log(gen.next().value); // 12 <-- anotherGenerator
console.log(gen.next().value); // 13 <-- anotherGenerator
console.log(gen.next().value); // 20