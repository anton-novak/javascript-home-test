function assertEquals(expect, actual) {
    if (arguments.length === 1) {
        throw new Error('Actual value to compare missing in the arguments');
    };
    if (arguments.length === 0) {
        throw new Error('Expected and actual values missing in the arguments');
    };

    function checkUnsupported(arg) {
        if (typeof arg === 'object' && arg !== null) {
            throw new Error(`Argument ${arg} of type ${typeof arg} unsupported`);
        };
        if (typeof arg === 'function') {
            throw new Error(`Argument ${arg} of type ${typeof arg} unsupported`);
        };
    };

    Array.from(arguments).forEach(arg => {
        if (Array.isArray(arg)) {
            arg.forEach((element) => checkUnsupported(element));
        } else {
            checkUnsupported(arg);
        };
    });

    if (typeof expect !== typeof actual) {
        if (
            typeof expect === 'undefined' && actual === null ||
            typeof actual === 'undefined' && expect === null
            ) {
            throw new Error(`You are comparing ${typeof expect === 'undefined' ? 'undefined (expect)' : 'null (expect)'} 
            with ${typeof actual === 'undefined' ? 'undefined (actual)' : 'null (actual)'}`);
        } else {
            throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);
        };
    };
    
    
    if (
        Array.isArray(expect) && actual === null ||
        Array.isArray(actual) && expect === null
        ) {
        throw new Error(`Expected type ${typeof expect === null ? 'object (null)' : 'object (array)'} but found type ${typeof actual === null ? 'object (null)' : 'object (array)'}`);
    };

    function comparePrimitives(first, second) {
        if (first === second) {
            return;
        } else {
            throw new Error(`Expected ${first} but found ${second}`);
        };
    };

    if (Array.isArray(expect) && Array.isArray(actual)) {
        if (expect.length !== actual.length) {
            throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
        } else {
            for (let i = 0; i < expect.length; i++) {
                comparePrimitives(expect[i], actual[i]);
            };
        };
        return;
    };

    comparePrimitives(expect, actual);
}

assertEquals(['a', 'b'], ['a', 'd']);

module.exports = assertEquals