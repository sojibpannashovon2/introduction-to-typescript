"use strict";
{
    //Type assertion
    let anything;
    anything = "it can be anything";
    anything = 56;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        }
        else if (typeof value === "number") {
            const convertedValue = value * 1000;
            return `The converted value is: ${convertedValue}`;
        }
    };
    const result1 = kgToGm(10);
    const result2 = kgToGm("10");
}
