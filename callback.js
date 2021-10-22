
let listNum = [10, 55, 20, 31, 31, 31, -9, 15];

let list = ["pizza", "bolo", "macarronada"];


const myCallbackForEach = (value) => {
    console.log(`${value} é muito bom!`);
};

const myCallbackMap = (value) => {
    return value * 2;
};

const myCallbackFilter = (value) => {
    return value > 23;
};

const myCallbackFind = (value) => {
    return value % 2 === 0;
};

const myCallbackFindIndex = (value) => {
    return value % 2  === 0;
};

const myCallbackReduce = (a, b) => {
    return a + b;
};

const myCallbackSome = (value) => {
    return value > 23;
};

const myCallbackEvery = (value) => {
    return value < 23;
};
