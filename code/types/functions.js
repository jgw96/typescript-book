"use strict";
var parameter;
(function (parameter) {
    var sampleVariable;
    function foo(sampleParameter) { }
})(parameter || (parameter = {}));
var returnType;
(function (returnType) {
    function foo(sample) {
        return sample;
    }
})(returnType || (returnType = {}));
var inferred;
(function (inferred) {
    function foo(sample) {
        return sample;
    }
})(inferred || (inferred = {}));
var misspelled;
(function (misspelled) {
    function foo() {
        return { fou: 'John Doe' };
    }
    sendAsJSON(foo());
})(misspelled || (misspelled = {}));
var optional;
(function (optional) {
    function foo(bar, bas) {
    }
    foo(123);
    foo(123, 'hello');
})(optional || (optional = {}));
var optionalDefault;
(function (optionalDefault) {
    function foo(bar, bas) {
        if (bas === void 0) { bas = 'world'; }
        console.log(bar, bas);
    }
    foo(123);
    foo(123, 'hello');
})(optionalDefault || (optionalDefault = {}));
