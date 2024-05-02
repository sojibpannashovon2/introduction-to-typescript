"use strict";
var _a, _b;
{
    //Nullish coalesing operator
    //? Null undefine .........  decission making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Not a host or guest";
    console.log(result1);
    const user = {
        name: "Noman",
        adress: {
            city: "Chadpur",
            road: "bbt",
            presenAddress: "lokkhipur",
        },
        age: 67,
    };
    const presenAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.adress) === null || _a === void 0 ? void 0 : _a.presenAddress2) !== null && _b !== void 0 ? _b : " No permanent address";
    console.log({ presenAddress });
}
