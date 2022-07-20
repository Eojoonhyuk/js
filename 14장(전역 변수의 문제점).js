var x = 'global';

function foo() {
    console.log(x);
    var x = 'local';
}

foo();
console.log(x); // global

(function() {
    var foo = 10; // 즉시 실행 함수의 지역 변수
}());

console.log(foo); // ReferenceError: foo is not defined

var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'Eo';

console.log(MYAPP.name); // Eo