var person = {
	name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.` );
    }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: f}

var obj = {};
var key = 'hello';

// ES6: 프로퍼티 키의 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}

var circle = {
	radius: 5, // <- 프로퍼티
    
    // 원의 지름
    getDiameter: function () { // <- 메서드
    	return 2 * this.radius; // this는 circle을 가리킨다.
        }
};

console.log(circle.getDiameter()); // 10

var person = {
    name: "Eo"
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Eo

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Eo

var person = {
    name: 'Eo'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'kim';

console.log(person); // {name: "Kim"}

var person = {
    name: 'Eo'
};

person.age = 20;

console.log(person); // { name: 'Eo', age: 20 }

var person = {
    name: 'Eo'
};

person.age = 20;
delete person.age;
console.log(person); // { name: 'Eo' }

//ES5
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj); // { x: 1, y: 2 }

//ES6
let x = 1, y = 2;

//프로퍼티 축약표현
const obj = { x, y };

console.log(obj); // { x: 1, y: 2 }

// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
};

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

