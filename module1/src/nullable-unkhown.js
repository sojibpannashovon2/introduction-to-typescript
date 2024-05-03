"use strict";
{
    //? Nullable
    const searchName = (value) => {
        if (value) {
            console.log("Value is found !!");
        }
        else {
            console.log("No value found @@@");
        }
    };
    searchName(null);
    //?unknown ------ type of
    const getSpeedMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 36000;
            console.log(convertedSpeed, unit);
        }
    };
    getSpeedMeterPerSecond("2000 ms^-1");
}
