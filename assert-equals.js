function assertEquals(expect, actual) {
    
    if (arguments.length === 1) {
        throw new Error('Actual value to compare missing in the arguments');
    };
    if (arguments.length === 0) {
        throw new Error('Expected and actual values missing in the arguments');
    };

    function checkUnsupported(arg) {
        // if (typeof arg === 'object' && arg !== null) {
        //     throw new Error(`Argument ${arg} of type ${typeof arg} unsupported`);
        // };
        if (typeof arg === 'function') {
            throw new Error(`Argument ${arg} of type ${typeof arg} unsupported`);
        };
    };

    Array.from(arguments).forEach(arg => {
        if (Array.isArray(arg)) {
            arg.forEach((element) => checkUnsupported(element));
        } else if (typeof arg === 'object' && arg !== null) {
            for (let key in arg) {
                checkUnsupported(arg[key]);
            };
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

    // objects, arrays and nulls
    // case 1: one is array, the other should be as well
    // case 2: one is object, the other should be as well but not null
    if (
        Array.isArray(expect) && !Array.isArray(actual) ||
        Array.isArray(actual) && !Array.isArray(expect)
    ) {
        throw new Error(`Expected type ${Array.isArray(expect) ? 'object (array)' : 'object'} but found type ${Array.isArray(actual) ? 'object (array)' : 'object'}`);
    } else if (typeof expect === 'object' && expect !== null && actual === null ||
        typeof actual === 'object' && actual !== null && expect === null) {
            throw new Error(`Expected type ${typeof expect === 'object' ? 'object' : 'null'} but found type ${typeof actual === 'object' ? 'object' : 'null'}`);
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
                assertEquals(expect[i], actual[i]);
            };
        };
        return;
    };
    
    if (typeof expect === 'object' && expect !== null && typeof actual === 'object' && actual !== null) {
        if (Object.keys(expect).length !== Object.keys(actual).length) {
            throw new Error(`Expected ${Object.keys(expect).length} properties but found ${Object.keys(actual).length}`);
        } else {
            for (let key in expect) {
                assertEquals(expect[key], actual[key]);
            };
        };
        return;
    };

    comparePrimitives(expect, actual);
}

module.exports = assertEquals