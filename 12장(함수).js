var x = 0;
var y = 0;
var result = 0;

x = 1;
y= 2;
result = x + y; // 3

x = 3;
y = 4;
result = x + y; // 7

x = 5;
y = 6;
result = x + y; // 11

function add(x, y){
    return x + y;
}

var result = 0;
result = add(1, 2); // 3
result = add(3, 4); // 7
result = add(5, 6); // 11

// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5 )); // 7
console.log(sub(2, 5 )); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function(x, y){
    return x - y;
};

// 매개변수 primitive는 원시의 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태
var num = 100;
var person = { name: 'Lee'};

console.log(num); // 100
console.log(person); // { name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: "Kim"}

// 익명 즉시 실행 함수
(function (){
    var a = 3;
    var b = 5;
    return a * b;
}());

// 기명 즉시 실행 함수
(function foo(){
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined

// 재귀 함수
function conuntdown(n){
    if(n < 0) return;
    console.log(n);
    conuntdown(n - 1); // 재귀 호출
}

conuntdown(10);



function outer(){
    var x = 1;

    // 중첩 함수
    function inner(){
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }

    inner();
}

outer();

// 콜백 함수
// n만큼 어떤 일을 반복한다.
function repeat(n){
    // i를 출력한다.
    for(var i = 0; i < n; i++) console.log(i);
}

repeat(5); // 0 1 2 3 4